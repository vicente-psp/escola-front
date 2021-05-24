import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Aluno } from './../aluno/aluno.service';
import { AvaliacaoPeso } from './../avaliacao-peso/avaliacao-peso.service';
import { environment } from './../../../environments/environment';


export enum AnoLetivo {
  PRIMEIRO_BIMESTRE = 'PRIMEIRO_BIMESTRE',
  SEGUNDO_BIMESTRE = 'SEGUNDO_BIMESTRE',
  TERCEIRO_BIMESTRE = 'TERCEIRO_BIMESTRE',
  QUARTO_BIMESTRE = 'QUARTO_BIMESTRE'
}

export interface Avaliacao {
  anoLetivo: string;
  aluno: Aluno;
  avaliacaoPeso: AvaliacaoPeso;
  nota: number;
  peso?: number;
}

const factoryAvaliacao = (): Avaliacao => {
  return {
    anoLetivo: AnoLetivo.PRIMEIRO_BIMESTRE.toString(),
    aluno: null,
    avaliacaoPeso: null,
    nota: 0
  }
}


@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private API_URL = `${environment.API_ENDPOINT}/avaliacoes`;

  public entity: Avaliacao = factoryAvaliacao();

  constructor(private httpClient: HttpClient) { }

  public listarAvaliacao(): Observable<Array<Avaliacao>> {
    return this.httpClient.get<Array<Avaliacao>>(this.API_URL);
  }

  public salvarAvaliacao(entity: Avaliacao): Observable<Avaliacao> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<Avaliacao>(this.API_URL, JSON.stringify(entity), { headers });
  }

  public getFactoryAvaliacao(): Avaliacao {
    return factoryAvaliacao();
  }

}

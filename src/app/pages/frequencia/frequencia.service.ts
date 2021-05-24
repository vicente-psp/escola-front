import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Aluno } from './../aluno/aluno.service';
import { environment } from './../../../environments/environment';


export enum AnoLetivo {
  PRIMEIRO_BIMESTRE = 'PRIMEIRO_BIMESTRE',
  SEGUNDO_BIMESTRE = 'SEGUNDO_BIMESTRE',
  TERCEIRO_BIMESTRE = 'TERCEIRO_BIMESTRE',
  QUARTO_BIMESTRE = 'QUARTO_BIMESTRE'
}

export interface Frequencia {
  anoLetivo: string;
  aluno: Aluno;
  presenca: boolean;
}

const factoryFrequencia = (): Frequencia => {
  return {
    anoLetivo: AnoLetivo.PRIMEIRO_BIMESTRE.toString(),
    aluno: null,
    presenca: false
  }
}


@Injectable({
  providedIn: 'root'
})
export class FrequenciaService {

  private API_URL = `${environment.API_ENDPOINT}/frequencias`;

  public entity: Frequencia = factoryFrequencia();

  constructor(private httpClient: HttpClient) { }

  public listarFrequencia(): Observable<Array<Frequencia>> {
    return this.httpClient.get<Array<Frequencia>>(this.API_URL);
  }

  public salvarFrequencia(entity: Frequencia): Observable<Frequencia> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post<Frequencia>(this.API_URL, JSON.stringify(entity), { headers });
  }

  public getFactoryFrequencia(): Frequencia {
    return factoryFrequencia();
  }

}

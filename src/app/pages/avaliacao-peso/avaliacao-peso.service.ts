import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';


export interface AvaliacaoPeso {
  id: number;
  descricao: string;
  valor: number;
}


@Injectable({
  providedIn: 'root'
})
export class AvaliacaoPesoService {

  private API_URL = `${environment.API_ENDPOINT}/avaliacoes-peso`;

  constructor(private httpClient: HttpClient) { }

  public listarAvaliacoesPeso(): Observable<Array<AvaliacaoPeso>> {
    return this.httpClient.get<Array<AvaliacaoPeso>>(this.API_URL);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';


export interface Aluno {
  id: number;
  nome: string;
  matricula: string;
  situacao: SituacaoDto;
}

export interface SituacaoDto {
  aluno: number;
  media1: number;
  media2: number;
  media3: number;
  media4: number;
  mediaFinal: number;
  percentualPresencas: number;
  situacao: Situacao;
}

export enum Situacao {
  APROVADO,
  RECUPERACAO,
  REPROVADO
}


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private API_URL = `${environment.API_ENDPOINT}/alunos`;

  constructor(private httpClient: HttpClient) { }

  public listarAlunos(): Observable<Array<Aluno>> {
    return this.httpClient.get<Array<Aluno>>(this.API_URL);
  }

}

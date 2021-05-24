import { Injectable } from '@angular/core';


export enum Page {
  ALUNO, AVALIACAO, FREQUENCIA
}


@Injectable({
  providedIn: 'root'
})
export class AppService {

  public pageActive = Page.ALUNO;
  public page = Page;

  constructor() { }
}

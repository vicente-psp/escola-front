import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public appService: AppService) { }

  public clickHome(): void {
    this.appService.pageActive = null;
  }

  public clicAlunos(): void {
    this.appService.pageActive = this.appService.page.ALUNO;
  }

  public clicAvaliacoes(): void {
    this.appService.pageActive = this.appService.page.AVALIACAO;
  }

  public clicFrequencias(): void {
    this.appService.pageActive = this.appService.page.FREQUENCIA;
  }

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FrequenciaService } from './frequencia.service';
import { AlunoService, Aluno } from '../aluno/aluno.service';


@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.component.html',
  styleUrls: ['./frequencia.component.css']
})
export class FrequenciaComponent implements OnInit {

  public listaAlunos = new Array<Aluno>();
  public listaAnoLetivo = [
    { name: 'PRIMEIRO_BIMESTRE', description: 'Primeiro bimestre'},
    { name: 'SEGUNDO_BIMESTRE', description: 'Segundo bimestre'},
    { name: 'TERCEIRO_BIMESTRE', description: 'Terceiro bimestre'},
    { name: 'QUARTO_BIMESTRE', description: 'Quarto bimestre'}
  ];

  constructor(
    public frequenciaService: FrequenciaService,
    public alunoService: AlunoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.alunoService.listarAlunos().subscribe(
      data => {
        this.listaAlunos = data.map(obj => {
          obj.situacao.percentualPresencas = obj.situacao.percentualPresencas / 100;
          return obj;
        });
      },
      err => console.log('err => ', err)
    );
  }

  public saveEntity(): void {
    this.frequenciaService
      .salvarFrequencia(this.frequenciaService.entity)
      .subscribe(
        () => {
          this._snackBar.open('Frequência inserida com sucesso', 'Fechar', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 6000
          });
          this.frequenciaService.entity = this.frequenciaService.getFactoryFrequencia();
        },
        err => console.log(err)
      );
  }
}

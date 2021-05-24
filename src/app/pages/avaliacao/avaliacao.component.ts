import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoPeso, AvaliacaoPesoService } from './../avaliacao-peso/avaliacao-peso.service';
import { Aluno, AlunoService } from './../aluno/aluno.service';


@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  public listaAlunos = new Array<Aluno>();
  public listaAvaliacoesPeso = new Array<AvaliacaoPeso>();
  public listaAnoLetivo = [
    { name: 'PRIMEIRO_BIMESTRE', description: 'Primeiro bimestre'},
    { name: 'SEGUNDO_BIMESTRE', description: 'Segundo bimestre'},
    { name: 'TERCEIRO_BIMESTRE', description: 'Terceiro bimestre'},
    { name: 'QUARTO_BIMESTRE', description: 'Quarto bimestre'}
  ];

  constructor(
    public avaliacaoService: AvaliacaoService,
    public alunoService: AlunoService,
    public avaliacaoPesoService: AvaliacaoPesoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.avaliacaoPesoService.listarAvaliacoesPeso().subscribe(
      data => {
        this.listaAvaliacoesPeso = data;
      },
      err => console.log('err => ', err)
    );

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
    this.avaliacaoService
      .salvarAvaliacao(this.avaliacaoService.entity)
      .subscribe(
        () => {
          this._snackBar.open('Avaliação inserida com sucesso', 'Fechar', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 6000
          });
          this.avaliacaoService.entity = this.avaliacaoService.getFactoryAvaliacao();
        },
        err => console.log(err)
      );
  }

}

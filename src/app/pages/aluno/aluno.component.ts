import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Aluno, AlunoService } from './aluno.service';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AlunoComponent implements OnInit {

  public expandedElement: Aluno | null;
  public columns = ['id', 'nome', 'matricula'];
  public columnsToDisplay = [
    { name: 'id', description: 'ID' },
    { name: 'nome', description: 'Nome' },
    { name: 'matricula', description: 'Matrícula' }
  ];
  public listaAlunos = new Array<Aluno>();

  constructor(private alunoService: AlunoService) { }

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

}

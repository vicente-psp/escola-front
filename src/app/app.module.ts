import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvaliacaoModule } from './pages/avaliacao/avaliacao.module';
import { FrequenciaModule } from './pages/frequencia/frequencia.module';
import { AlunoModule } from './pages/aluno/aluno.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AlunoModule,
    FrequenciaModule,
    AvaliacaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { HistorialAcademicoComponent } from './components/historial-academico/historial-academico.component';
import { HistorialLaboralComponent } from './components/historial-laboral/historial-laboral.component';
import { PerfilPersonalComponent } from './components/perfil-personal/perfil-personal.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { InfoContactoComponent } from './components/info-contacto/info-contacto.component';
import { ReusableCardComponent } from './components/reusable-card/reusable-card.component';




@NgModule({
  declarations: [
    AppComponent,
    HistorialAcademicoComponent,
    HistorialLaboralComponent,
    PerfilPersonalComponent,
    IdiomasComponent,
    InfoContactoComponent,
    ReusableCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialAcademicoComponent } from './components/historial-academico/historial-academico.component';
import { HistorialLaboralComponent } from './components/historial-laboral/historial-laboral.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { InfoContactoComponent } from './components/info-contacto/info-contacto.component';
import { PerfilPersonalComponent } from './components/perfil-personal/perfil-personal.component';

const routes: Routes = [  
  { path: '', component: PerfilPersonalComponent },
  { path: 'perfilPersonal', component: PerfilPersonalComponent },
  { path: 'historialAcademico', component: HistorialAcademicoComponent },
  { path: 'historialLaboral', component: HistorialLaboralComponent },
  { path: 'infoContacto', component: InfoContactoComponent },
  { path: 'idiomas', component: IdiomasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
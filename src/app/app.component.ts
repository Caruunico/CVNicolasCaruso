import { Component } from '@angular/core';

interface Pages {
  nombre: string;
  ruta: string;
  icon: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurriculumVitae';
  pages: Pages[] = [
    {
      nombre: 'Perfil Personal',
      ruta: '/perfilPersonal',
      icon: 'perm_identity'
    },
    {
      nombre: 'Historial Académico',
      ruta: '/historialAcademico',
      icon: 'school'
    },
    {
      nombre: 'Historial Laboral',
      ruta: '/historialLaboral',
      icon: 'work_outline'
    },
    {
      nombre: 'Idiomas',
      ruta: '/idiomas',
      icon: 'language'
    },
    {
      nombre: 'Contacto',
      ruta: '/infoContacto',
      icon: 'contact_mail'
    },
  ]
  constructor(){}
  
  ngOnInit(){}


}

import { Component } from '@angular/core';

interface Pages {
  nombre: string;
  ruta: string;
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
      ruta: '/perfilPersonal'
    },
    {
      nombre: 'Historial Académico',
      ruta: '/historialAcademico'
    },
    {
      nombre: 'Historial Laboral',
      ruta: '/historialLaboral'
    },
    {
      nombre: 'Idiomas',
      ruta: '/idiomas'
    },
    {
      nombre: 'Contacto',
      ruta: '/infoContacto'
    },
  ]
  constructor(){}
  
  ngOnInit(){}


}

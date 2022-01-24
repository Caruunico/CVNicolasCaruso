import { Injectable } from '@angular/core';

interface DatosCard {
  tituloCard: string;
  subTituloCard: string;
  pieDeTituloCard: string;
  contenidoCard: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  dataCard: DatosCard[] = [
    {
      tituloCard: 'NICOLÁS MARTÍN CARUSO',
      subTituloCard: 'Perfil Personal',
      pieDeTituloCard: '',
      contenidoCard: [
        {
          contenido: [
            'Mi objetivo es trabajar en una empresa detecnología donde pueda aplicar misconocimientos, adquirir nuevos aprendizajes que me ayuden a crecer tanto en lo laboral como en lo personal y poder desenvolverme con compromiso y responsabilidad dentro de un buen clima laboral.',
            'Skills:',
            'Html5',
            'Css, Grid y Flexbox',
            'JavaScript',
            'TypeScript / Angular 10+',
            'Integración de servicios con API REST',
            'Git',
            'Metodología ágil Scrum'

          ]
        }
      ]
    },
    {
      tituloCard: 'HISTORIAL ACADÉMICO',
      subTituloCard: 'Analista de sistemas de computación',
      pieDeTituloCard: 'Escuela Superior de comercio J.J. Urquiza N°49',
      contenidoCard: [
        {
          contenido: ['Año de ingreso/egreso: 2016/2018',
            'Análisis y relevamiento de datos.',
            'Diagrama entidad-relación.',
            'UML.',
            'Casos de uso.',
            'Html5',
            'Desarrollo:',
            'CSS',
            'JavaScript',
            'PHP',
            'MySQL']
        }

      ]
    },
    {
      tituloCard: 'HISTORIAL LABORAL',
      subTituloCard: 'Experiencia',
      pieDeTituloCard: '',
      contenidoCard: [
        {
          titulo: 'Grassi S.A.',
          subtitulo: 'Corredora de cereales',
          periodo: 'Octubre 2021 - Actualidad',
          funciones: 'Funciones:',
          contenido: [
            'Desarrollador Front-end Angular, TypeScript, JavaScript, Angular Material y Bootstrap.',
            'Desarrollo de componentes completos desde sus estilos hasta su funcionalidad según el requerimiento del usuario.',
            'Integración de servicios con API REST.',
            'Metodología ágil Scrum.',
            'Robot process Automation (RPA).'
          ]
        },
        {
          titulo: 'Deux IT Company',
          subtitulo: '',
          periodo: 'Desde Junio 2021 - Octubre 2021',
          funciones: 'Funciones',
          contenido: [
            'Desarrollador Front-end Angular, TypeScript, JavaScript, Angular Material y Bootstrap.',
            'Desarrollo de componentes completos desde sus estilos hasta su funcionalidad según el requerimiento del cliente.',
            'Integración de servicios con API REST.',
            'Metodología ágil Scrum.'
          ]
        },
        {
          titulo: 'Gerente de turno. Líder B',
          subtitulo: "Arcos Dorados S.A. Mc Donald's",
          periodo: 'Noviembre 2013 - Mayo 2021',
          funciones: 'Funciones:',
          contenido: [
            'Toma efectiva de decisiones y resolución de conflictos',
            'Revisión y resolución de reclamos.',
            'Completar listas de verificación y procedimientos para reportar el efectivo, arqueo de cajas, control de inventarios, administración de proveedores.',
            'Dirigir, coordinar, motivar y supervisar la labor del personal a cargo, a fines de garantizar una atención de calidad a los clientes para conseguir fidelizarlos.',
            'Plantear objetivos que beneficien a la empresa, comunicarlosal resto del equipo y hacer seguimiento para lograrlos.',
            'Operar de acuerdo a los estándares de la empresa.',
            'Control del orden, higiene y seguridad del establecimiento.'
          ]
        },

      ]
    },
    {
      tituloCard: 'IDIOMAS',
      subTituloCard: 'Estudios',
      pieDeTituloCard: '',
      contenidoCard: [
        { 
          contenido: 
          ['Estudiante Inglés en el instituto CRECE IDIOMAS',] }

      ]
    },
    {
      tituloCard: 'INFORMACION DE CONTACTO',
      subTituloCard: '',
      pieDeTituloCard: '',
      contenidoCard: [
        {
          contenido: 
          ['Teléfono: 341-2256609.',
            'LinkedIn:',
            'https://www.linkedin.com/in/nicolascaruso-889570187/',
            'GitHub:',
            'https://github.com/Caruunico',
            'Rosario, Santa Fe, Argentina.',
            'Correo: nicolascaruso19@outlook.com']
        }

      ]
    },
  ]

  constructor() { }


}

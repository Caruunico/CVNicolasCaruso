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
  linkedIn = 'https://www.linkedin.com/in/nicolascaruso-889570187/'
  git = 'https://github.com/Caruunico'
  dataCard: DatosCard[] = [
    {
      tituloCard: 'NICOLÁS MARTÍN CARUSO - ANALISTA DE SISTEMAS',
      subTituloCard: 'Perfil Personal',
      pieDeTituloCard: '',
      contenidoCard: [
        {
          contenido: [
            { texto: 'Mi objetivo es trabajar en una empresa de tecnología donde pueda aplicar mis conocimientos, adquirir nuevos aprendizajes que me ayuden a crecer tanto en lo laboral como en lo personal y poder desenvolverme con compromiso y responsabilidad dentro de un buen clima laboral.', negrita: false },
            { texto: 'Skills:', negrita: true },
            { texto: 'Html5.', negrita: false },
            { texto: 'Css, Grid y Flexbox.', negrita: false },
            { texto: 'JavaScript.', negrita: false },
            { texto: 'TypeScript / Angular 10+.', negrita: false },
            { texto: 'Integración de servicios con API REST.', negrita: false },
            { texto: 'Git.', negrita: false },
            { texto: 'Metodología ágil Scrum.', negrita: false },
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
          contenido: [
            { texto: 'Año de ingreso/egreso: 2016/2018', negrita: true },
            { texto: 'Análisis y relevamiento de datos.', negrita: false },
            { texto: 'Diagrama entidad-relación.', negrita: false },
            { texto: 'UML.', negrita: false },
            { texto: 'Casos de uso.', negrita: false },
            { texto: 'Html5.', negrita: false },
            { texto: 'Desarrollo:', negrita: true },
            { texto: 'CSS.', negrita: false },
            { texto: 'JavaScript.', negrita: false },
            { texto: 'PHP.', negrita: false },
            { texto: 'MySQL.', negrita: false },
          ]
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
            { texto: 'Desarrollador Front-end Angular, TypeScript, JavaScript, Angular Material y Bootstrap.', negrita: false },
            { texto: 'Desarrollo de componentes completos desde sus estilos hasta su funcionalidad según el requerimiento del usuario.', negrita: false },
            { texto: 'Integración de servicios con API REST.', negrita: false },
            { texto: 'Metodología ágil Scrum.', negrita: false },
            { texto: 'Robot process Automation (RPA).', negrita: false }

          ]
        },
        {
          titulo: 'Deux IT Company',
          subtitulo: '',
          periodo: 'Desde Junio 2021 - Octubre 2021',
          funciones: 'Funciones',
          contenido: [
            { texto: 'Desarrollador Front-end Angular, TypeScript, JavaScript, Angular Material y Bootstrap.', negrita: false },
            { texto: 'Desarrollo de componentes completos desde sus estilos hasta su funcionalidad según el requerimiento del cliente.', negrita: false },
            { texto: 'Integración de servicios con API REST.', negrita: false },
            { texto: 'Metodología ágil Scrum.', negrita: false }
          ]
        },
        {
          titulo: 'Gerente de turno. Líder B',
          subtitulo: "Arcos Dorados S.A. Mc Donald's",
          periodo: 'Noviembre 2013 - Mayo 2021',
          funciones: 'Funciones:',
          contenido: [
            { texto: 'Toma efectiva de decisiones y resolución de conflictos', negrita: false },
            { texto: 'Revisión y resolución de reclamos.', negrita: false },
            { texto: 'Completar listas de verificación y procedimientos para reportar el efectivo, arqueo de cajas, control de inventarios, administración de proveedores.', negrita: false },
            { texto: 'Dirigir, coordinar, motivar y supervisar la labor del personal a cargo, a fines de garantizar una atención de calidad a los clientes para conseguir fidelizarlos.', negrita: false },
            { texto: 'Plantear objetivos que beneficien a la empresa, comunicarlosal resto del equipo y hacer seguimiento para lograrlos.', negrita: false },
            { texto: 'Operar de acuerdo a los estándares de la empresa.', negrita: false },
            { texto: 'Control del orden, higiene y seguridad del establecimiento.', negrita: false }
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
            [
              { texto: 'Estudiante Inglés en el instituto CRECE IDIOMAS', negrita: false }
            ]
        }

      ]
    },
    {
      tituloCard: 'INFORMACIÓN DE CONTACTO',
      subTituloCard: '',
      pieDeTituloCard: '',
      contenidoCard: [
        {
          contenido:
            [
              { texto: 'Teléfono: 341-2256609.', negrita: false },
              { texto: 'LinkedIn:', negrita: true },
              { texto:'https://www.linkedin.com/in/nicolascaruso-889570187/', negrita: false, link: this.linkedIn},
              { texto: 'GitHub:', negrita: true },
              { texto: 'https://github.com/Caruunico', negrita: false, link: this.git },
              { texto: 'Rosario, Santa Fe, Argentina.', negrita: true },
              { texto: 'Correo: nicolascaruso19@outlook.com', negrita: true }
              ]
        }

      ]
    },
  ]

  constructor() { }


}

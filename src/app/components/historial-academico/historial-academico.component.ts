import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/data-service.service';

@Component({
  selector: 'app-historial-academico',
  templateUrl: './historial-academico.component.html',
  styleUrls: ['./historial-academico.component.css']
})
export class HistorialAcademicoComponent implements OnInit {

  dataPerfilPersonal: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    console.log(this.dataService.dataCard)
    this.dataPerfilPersonal = this.dataService.dataCard[1]
  }

}

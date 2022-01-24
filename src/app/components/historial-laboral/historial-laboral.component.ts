import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/data-service.service';

@Component({
  selector: 'app-historial-laboral',
  templateUrl: './historial-laboral.component.html',
  styleUrls: ['./historial-laboral.component.css']
})
export class HistorialLaboralComponent implements OnInit {
  dataPerfilPersonal: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    console.log(this.dataService.dataCard)
    this.dataPerfilPersonal = this.dataService.dataCard[2]
  }

}

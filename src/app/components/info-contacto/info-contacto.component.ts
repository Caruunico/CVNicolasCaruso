import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/data-service.service';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent implements OnInit {

  dataPerfilPersonal: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    console.log(this.dataService.dataCard)
    this.dataPerfilPersonal = this.dataService.dataCard[4]
  }


}

import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/data-service.service';

@Component({
  selector: 'app-perfil-personal',
  templateUrl: './perfil-personal.component.html',
  styleUrls: ['./perfil-personal.component.css']
})
export class PerfilPersonalComponent implements OnInit {

  dataPerfilPersonal: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    console.log(this.dataService.dataCard)
    this.dataPerfilPersonal = this.dataService.dataCard[0]
  }

}

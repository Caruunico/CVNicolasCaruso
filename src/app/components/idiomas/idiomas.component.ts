import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/data-service.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  dataPerfilPersonal: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    console.log(this.dataService.dataCard)
    this.dataPerfilPersonal = this.dataService.dataCard[3]
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.css']
})
export class ReusableCardComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  
}

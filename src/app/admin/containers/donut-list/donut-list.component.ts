import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
   <div>
    <app-donut-card [donut]="donuts[0]"></app-donut-card>
    <app-donut-card [donut]="donuts[1]"></app-donut-card>
    <app-donut-card [donut]="donuts[2]"></app-donut-card>
    
   </div>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
  donuts!: Donut[];
  
  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'aadwfd',
        name: 'Just chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chochoholic'
      },
      {
        id: 'dfsfs',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Whatever dude'
      },
      {
        id: 'fghfhf',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'whooooot '
      },
    ];
  }
}

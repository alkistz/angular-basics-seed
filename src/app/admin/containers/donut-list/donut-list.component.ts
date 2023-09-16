import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
   <div>
    <ng-container *ngIf="donuts.length; else nothing; trackBy: trackById">
      <app-donut-card
        *ngFor="let donut of donuts"
        [donut]="donut"
      ></app-donut-card>
    </ng-container>

    <ng-template #nothing>
      <p>No Donuts here...</p>
    </ng-template>
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
        promo: 'limited',
        description: 'For the pure chochoholic'
      },
      {
        id: 'dfsfs',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'new',
        description: 'Whatever dude'
      },
      {
        id: 'fghfhf',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'whooooot'
      },
      {
        id: '129iv2',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate'
      },
      {
        id: 'hun9w7',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 139,
        description: 'Delicious lucious lemon'
      },
    ];
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}

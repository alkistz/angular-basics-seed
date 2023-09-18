import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form [donut]="donut" (create)="onCreate($event)"></app-donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor() {}

  ngOnInit(): void {
    this.donut = {
      id: 'aadwfd',
      name: 'Just chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'For the pure chochoholic',
    };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}

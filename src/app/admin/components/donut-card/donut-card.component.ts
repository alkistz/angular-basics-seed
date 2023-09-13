import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  template: `
    <div class="donut-card">
      <img 
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name" 
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">
          {{ donut.name }}
        </p>
        <p class="donut-card-price">
          {{ donut.price }}
        </p>
      </div>
      
    </div>
  `,
  styles: [
    `
      .donut-card {
        display: flex;
      }
    `
  ]
})
export class DonutCardComponent {
  @Input() donut!: Donut;

}
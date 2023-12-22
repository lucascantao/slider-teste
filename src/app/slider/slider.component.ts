import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  animations: [
    trigger('sliderWorks', [
      transition(':enter', [style({transform: 'translateX(200px)'}), animate('.3s ease-out', style({transform: 'translateX(0%)'}))])
    ]),
    trigger('animaSlider', [
      transition(':increment', [
        query(':enter, :leave', style({position: 'fixed'})),
        group([
          query(':enter', [style({transform: 'translateX(200px)'}), animate('.3s ease-out' , style({transform: 'translateX(0%)'}))]),
          query(':leave', [style({transform: 'translateX(0%)'}), animate('.3s ease-out', style({transform: 'translate(-200px)'}))])
        ])
      ]),
      transition(':decrement', [
        query(':enter, :leave', style({position: 'fixed',})),
        group([
          query(':enter', [style({transform: 'translateX(-200px)'}), animate('.3s ease-out', style({transform: 'translateX(0%)'}))]),
          query(':leave', [style({transform: 'translateX(0%)'}), animate('.3s ease-out', style({transform: 'translateX(200px)'}))])
        ])
      ])
    ])
  ]
})
export class SliderComponent {

  counter: number = 0;
  sliders = [
    {title: "S1", content:"Lorem ipsum"},
    {title: "S2", content:"Lorem ipsum"},
    {title: "S3", content:"Lorem ipsum"},
  ]

  onNext() {
    this.counter++;
  }

  onPrevious() {
    this.counter--;
  }

}

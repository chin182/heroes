import { Component } from '@angular/core';

import { Car, Engine, Tires } from './car';

import { CarFactory } from './car-factory';

@Component({
  selector: 'my-car',
  template: `
      <h2>Cars</h2>
      <div id="di">{{car.drive()}}</div>
      <div id="factory">{{factoryCar.drive()}}</div>
      `,
  providers: [ Car, Engine, Tires ]
})

export class CarComponent {
  factoryCar = (new CarFactory).createCar();

  constructor(public car: Car) { }
}

import { Injectable } from '@angular/core';

export class Engine {
  public cylinders = 4;
}

export class Tires {
  public make = 'Flintstones';
}

@Injectable()
export class Car {
  public description = 'DI';

  constructor(public engine: Engine, public tires: Tires) {}

  drive() {
    return `${this.description} car with ` +
          `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }

}

import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Logger } from './logger.service';

@Injectable()
export class HeroService {/*
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log('Fetched ${heroes.length} heroes.');
      this.heroes.push(...heroes);
    });
    return this.heroes;
  }*/

  constructor(private logger: Logger){}

  getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
  }
}

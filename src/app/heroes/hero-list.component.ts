import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  //providers: [ HeroService ]
})
/*
export class HeroListComponent implements OnInit {
  heroes: Hero[],
  selectedHero: Hero;

  constructor(private service: HeroService) {}

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectedHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
*/

export class HeroListComponent {
  //heroes = HEROES;
  heroes: Hero[];

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
        <div>
          <img src="{{heroImageUrl}}">
          <span [style.text-decoration] = "lineThrough">
            {{prefix}} {{hero?.name}}
          </span>
          <button (click)="delete()">Delete</button>
        </div>
        `
})

export class HeroDetailComponent {
  @Input() hero: Hero;

  @Output() deleteRequest = new EventEmitter<Hero>();

  delete() {
    this.deleteRequest.emit(this.hero);
  }
}

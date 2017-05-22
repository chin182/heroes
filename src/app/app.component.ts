import { Component } from '@angular/core';
/*
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <h2>My favorite hero is: {{myHero}}</h2>
      <p>Heroes:</p>
      <ul>
        <li *ngFor="let hero of heroes">
          {{hero.name}}
        </li>
      </ul>
      <p *ngIf="heroes.length > 3">There are many heroes!</p>
      <br/>
      <br/>
      <hero-form></hero-form>
      `
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm', 'Wind'),
    new Hero(13, 'Bombasto', 'Explo~sion!'),
    new Hero(15, 'Magneta', 'Manipulate Metal'),
    new Hero(20, 'Tornado', 'Wind')
  ];
.
  myHero = this.heroes[0].name;
}
*/

@Component({
  selector: 'my-app',
  template: '<my-heroes></my-heroes>',
})

export class AppComponent { }

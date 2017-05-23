import { Component, Inject } from '@angular/core';

import { APP_CONFIG, AppConfig } from './app.config';
import { Logger } from './logger.service';
import { UserService } from './user.service';
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
  template: `
        <h1>{{title}}</h1>
        <my-car></my-car>
        <my-injectors></my-injectors>
        <h2>User</h2>
        <p id="user">
          {{userInfo}}
          <button (click)="nextUser()">Next User</button>
        </p>
        <my-heroes id="authorized" *ngIf="isAuthorized"></my-heroes>
        <my-heroes id="unauthorized" *ngIf="!isAuthorized"></my-heroes>
        `,
  providers: [ Logger ]
})

export class AppComponent {
  title: string;

  constructor(@Inject(APP_CONFIG) config: AppConfig, private userService: UserService) {
    this.title = config.title;
  }

  get isAuthorized() {
    return this.user.isAuthorized;
  }

  nextUser() {
    this.userService.getNewUser();
  }

  get user() {
    return this.userService.user;
  }

  get userInfo() {
    return `Current user, ${this.user.name}, is ` +
          `${this.isAuthorized ? '' : 'not'} authorized. `
  }

}

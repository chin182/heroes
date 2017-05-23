import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { InjectorComponent } from './injector.component';

import { Logger } from './logger.service';
import { UserService } from './user.service';
import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';
//import { HeroService } from './hero.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [ UserService, {provide: APP_CONFIG, useValue: HERO_DI_CONFIG}, Logger ],  //BackendService, HeroService,
  declarations: [ AppComponent, CarComponent, HeroesComponent, HeroListComponent, InjectorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

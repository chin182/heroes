import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';

import { Logger } from './logger.service';
/*import { HeroService } from './hero.service';*/

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  providers: [ /*BackendService, HeroService*/, Logger ],
  declarations: [ AppComponent, HeroesComponent, HeroListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

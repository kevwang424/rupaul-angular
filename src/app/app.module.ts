import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { ContestantComponent } from './components/contestant.component'
import { AboutComponent } from './components/about.component'
import { NewContestantComponent } from './components/new.contestant.component'
import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, ContestantComponent, AboutComponent, NewContestantComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

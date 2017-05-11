import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { ContestantListComponent } from './components/contestant-list.component'
import { AboutComponent } from './components/about.component'
import { ContestantFormComponent } from './components/contestant-form.component'
import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, ContestantListComponent, AboutComponent, ContestantFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

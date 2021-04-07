import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { MicomponenteCalculadora} from './calculadora/cal.component';


@NgModule({
  declarations: [
    AppComponent,
    MicomponenteCalculadora
 
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

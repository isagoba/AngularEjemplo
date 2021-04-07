import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import {MicomponenteCalculadora} from './cal.component';

@NgModule({
    declarations: [
    
      MicomponenteCalculadora
    ],
    imports: [
      BrowserModule,
      
    ],
    exports: [MicomponenteCalculadora],

  })
  export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPzModule } from 'ng-pz';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

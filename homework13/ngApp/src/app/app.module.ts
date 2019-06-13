import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumbComponent } from './dumb/dumb.component';
import { SmartComponent } from './smart/smart.component';

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    SmartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

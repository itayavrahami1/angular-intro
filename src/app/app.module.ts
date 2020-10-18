import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeasonComponent } from './cmps/season/season.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponent } from './cmps/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

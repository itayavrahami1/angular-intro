import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SeasonComponent } from './cmps/season/season.component';
import { TimerComponent } from './cmps/timer/timer.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'season', component: SeasonComponent },
  { path: 'timer', component: TimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

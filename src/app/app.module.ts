import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ExecsComponent } from './execs/execs.component';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ExecCardComponent } from './exec-card/exec-card.component';

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'execs', component: ExecsComponent},
  { path: 'calendar', component: CalendarComponent },
  { path: 'about', component: AboutComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    ExecsComponent,
    AboutComponent,
    CalendarComponent,
    ExecCardComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

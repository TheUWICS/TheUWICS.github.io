import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ExecsComponent } from './execs/execs.component';
import { AboutComponent } from './about/about.component';
import { ExecCardComponent } from './exec-card/exec-card.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SessionsComponent } from './sessions/sessions.component';
import { DirectionsComponent } from './directions/directions.component';
import { DirectionComponent } from './direction/direction.component';

const appRoutes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'executives', component: ExecsComponent},
  { path: 'meetings', component: SessionsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'directions', component: DirectionsComponent },
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
    ExecCardComponent,
    AboutCardComponent,
    FeedbackComponent,
    SessionsComponent,
    DirectionsComponent,
    DirectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

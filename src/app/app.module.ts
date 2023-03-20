import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './compos/navbar/navbar.component';
import { CalenderComponent } from './compos/calender/calender.component';
import { CardsComponent } from './compos/cards/cards.component';
import { LaptopsComponent } from './compos/laptops/laptops.component';
import { MobilesComponent } from './compos/mobiles/mobiles.component';
import { LoginComponent } from './compos/login/login.component';
import { SignupComponent } from './compos/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalenderComponent,
    CardsComponent,
    LaptopsComponent,
    MobilesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

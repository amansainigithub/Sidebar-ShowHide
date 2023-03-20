import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './compos/calender/calender.component';
import { CardsComponent } from './compos/cards/cards.component';
import { LaptopsComponent } from './compos/laptops/laptops.component';
import { LoginComponent } from './compos/login/login.component';
import { MobilesComponent } from './compos/mobiles/mobiles.component';
import { SignupComponent } from './compos/signup/signup.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"",component:CalenderComponent , pathMatch:'full'
  },
    {
        path:"calender",component:CalenderComponent
      },
      {
        path:"mobiles",component:MobilesComponent
      },
      {
        path:"cards",component:CardsComponent
      },
      {
        path:"laptops",component:LaptopsComponent
      }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

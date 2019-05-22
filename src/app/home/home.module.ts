import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
                HomeComponent,
                SigninComponent, 
                SignupComponent
              ],
  imports: [
    CommonModule,
  
  ]
})
export class HomeModule { }

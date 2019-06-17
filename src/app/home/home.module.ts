import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
                HomeComponent,
                SigninComponent, 
                SignupComponent
              ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class HomeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { HomeModule } from './home/home.module';
import { HomeService } from './home/home.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    // HomeComponent,
    // StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,

    // StoriesModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

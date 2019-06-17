import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signingForm : FormGroup;
  constructor(private homeService : HomeService) { }

  ngOnInit()
  {
    this.signingForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required)
    })
  }

  onCreateAccount()
  {
    this.homeService.sendBoolean(false);
    console.log(this.homeService.returnValue());
  }

}

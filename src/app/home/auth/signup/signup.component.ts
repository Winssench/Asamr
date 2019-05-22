import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private homeService : HomeService) { }

  ngOnInit() {
  }

  onAlreadyHaveAccount()
  {
    this.homeService.sendBoolean(true);
    console.log(this.homeService.returnValue());
  }

}

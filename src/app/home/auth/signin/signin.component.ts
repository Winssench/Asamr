import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private homeService : HomeService) { }

  ngOnInit() {
  }

  onCreateAccount()
  {
    this.homeService.sendBoolean(false);
    console.log(this.homeService.returnValue());
  }

}

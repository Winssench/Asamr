import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isClicked: boolean ;
  constructor(private homeService : HomeService) { }

  ngOnInit() {
    // this.isClicked = this.homeService.returnValue();
    // console.log(this.isClicked);
    this.homeService.compnentMessage$.subscribe(
        message => {
          this.isClicked=message;
        }
    );
  }
  

}

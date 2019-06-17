import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  navExpand: boolean;
  shown : boolean;

  constructor() { }

  ngOnInit() {
    this.shown= true;
  }
  over()
  {
    this.shown = !this.shown;
  }
  leave()
  {
    console.log("gotcha");
   // this.shown = false;
  }
  
}

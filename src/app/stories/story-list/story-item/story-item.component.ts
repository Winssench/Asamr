import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../story.model';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {
  @Input('storyImported') story : Story;
  @Input() index : number;
  constructor() { }

  ngOnInit() {
  }

}

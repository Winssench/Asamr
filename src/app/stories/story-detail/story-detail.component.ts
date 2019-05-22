import { Component, OnInit } from '@angular/core';
import { Story } from '../story.model';
import { StoryService } from '../story.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css']
})
export class StoryDetailComponent implements OnInit {
  story : Story;
  id : number;
  constructor(private storyService : StoryService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params)=> {
        this.id = +params['id'];
        this.story = this.storyService.gerStoryById(this.id);
      });
  }
  onDeleteStory()
  {
    this.storyService.deleteStory(this.id);
  }

}

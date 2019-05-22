import { Component, OnInit, OnDestroy } from '@angular/core';
import { Story } from '../story.model';
import { StoryService } from '../story.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit, OnDestroy{
  subscription : Subscription;
  stories : Story[];
  constructor(private storyService: StoryService) { }
  ngOnInit() {
    this.subscription = this.storyService.storiesChanged.subscribe(
      (stories : Story[]) => {
        this.stories = stories;
      }
      );
      this.stories = this.storyService.getStories();
    }
  ngOnDestroy(): void {
      // throw new Error("Method not implemented.");
      this.subscription.unsubscribe();
  }

}

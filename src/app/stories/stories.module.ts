import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryStartComponent } from './story-start/story-start.component';
import { StoriesComponent } from './stories.component';
import { StoryItemComponent } from './story-list/story-item/story-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
                  StoriesComponent,
                  StoryDetailComponent, 
                  StoryListComponent, 
                 
                  StoryStartComponent, StoryItemComponent, ProfileComponent, LikesComponent],
  imports: [
    SharedModule,
    CommonModule,
    StoriesRoutingModule
  ]
})
export class StoriesModule { }

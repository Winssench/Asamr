import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { StoriesComponent } from './stories.component';
import { StoryStartComponent } from './story-start/story-start.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';


const storiesRoutes : Routes = [
    {path : '', component : StoriesComponent,
  children : [
    {path : '', component : StoryStartComponent },
    {path : ':id', component : StoryDetailComponent}
  ]},
   
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(storiesRoutes)
  ],
  exports : [RouterModule]
})
export class StoriesRoutingModule { }

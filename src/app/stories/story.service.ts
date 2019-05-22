import { Injectable } from '@angular/core';
import { Story } from './story.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  storiesChanged = new Subject<Story[]>();
  private stories : Story[] = [
    new Story('Hlono',
              'Tamedyazt Ihlan ghef Hlo, arensotor Inozar na dednagh ihadren',
              'https://images.unsplash.com/photo-1533671945066-14e1e1c9ad8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80'
              ),
    new Story('Amerdool',
              'Amerdool iga yan yessm iddan seg zman arasnteni immordel aleg',
              'https://images.unsplash.com/photo-1518978288375-f36cefcc992e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
              ),
    new Story('BouLemon',
              'IGa lemon yan le fruit ihlan isaht nebnadem arassnteni talozin',
              'https://images.unsplash.com/photo-1527960299979-ae13298358b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1416&q=80'),                  
    new Story('Hlono',
              'Tamedyazt Ihlan ghef Hlo, arensotor Inozar na dednagh ihadren',
              'https://images.unsplash.com/photo-1533671945066-14e1e1c9ad8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80'
              ),
    new Story('Amerdool',
              'Amerdool iga yan yessm iddan seg zman arasnteni immordel aleg',
              'https://images.unsplash.com/photo-1518978288375-f36cefcc992e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
              ),
    new Story('BouLemon',
              'IGa lemon yan le fruit ihlan isaht nebnadem arassnteni talozin',
              'https://images.unsplash.com/photo-1520123704147-ed3a34036262?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')                  
  ]
  constructor() { }

  public getStories()
  {
    return this.stories.slice();
  }
  public gerStoryById(id : number)
  {
    return this.stories[id];
  }
  addStory(story : Story)
  {
        this.stories.push(story);
        this.storiesChanged.next(this.stories.slice());
  }
  deleteStory(index : number)
  {
        this.stories.splice(index,1);
        this.storiesChanged.next(this.stories.slice());
  }
  updateStory(index : number , newStory : Story)
  {
        this.stories[index] = newStory;
        this.storiesChanged.next(this.stories.slice());
  }
  setStories(stories : Story[])
  {
    this.stories = stories;
    this.storiesChanged.next(this.stories.slice());
  }
}

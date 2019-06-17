import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { StoryService } from '../stories/story.service';
import { AuthService } from '../home/auth/auth-stuff/auth.service';

@Injectable()
export class DataStorageService
{
    constructor(private http:HttpClient,
                private storyService : StoryService,
                private authService: AuthService)
                {}
    

}
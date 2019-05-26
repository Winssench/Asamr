import { Component, OnInit } from '@angular/core';
import { Like } from 'src/app/shared/like.model';
import { LikeListService } from './like-list.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  private likes: Like[];
  constructor(private likesService: LikeListService) { }
  ngOnInit() {
    this.likes = this.likesService.getLikes();
  }

}

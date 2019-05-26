import { Injectable } from '@angular/core';
import { Like } from 'src/app/shared/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeListService {
  private likes: Like[] = [
    new Like('Baha'),
    new Like('Hdou'),
    new Like('Hadda'),
  ];
  constructor() { }
  /**
   * name
   */
  public getLikes() {
    return this.likes.slice();
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private registredLink ;
  private _childeMessageSource = new Subject<boolean>();
  compnentMessage$ = this._childeMessageSource.asObservable();
  constructor() { }
  sendBoolean(message : boolean)
  {
      this._childeMessageSource.next(message);
  }
  registerLinkPressed()
  {
    this.registredLink=true;
  }
  alreadyHaveAccount()
  {
    this.registredLink = false;
  }
  toggleChild()
  {
    this.registredLink = !this.registredLink;
  }
  returnValue()
  {
    return this.registredLink;
  }
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string;
  constructor() { }
  isAthenticated()
  {
    return this.token != null;
  }
}

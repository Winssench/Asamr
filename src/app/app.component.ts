import { Component } from '@angular/core';
import { filter} from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stateFlag = false;
  title = 'Asamr-app';

  calculateClasses()
  {
    
  }
}

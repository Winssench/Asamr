import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm : FormGroup;
  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null,Validators.required),
        'lastname': new FormControl(null,Validators.required),
        'email' : new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
        'password': new FormControl(null,Validators.required)
      }),
     
      'gender' : new FormControl('male'),
     

    })
  }

  onAlreadyHaveAccount()
  {
    this.homeService.sendBoolean(true);
    //console.log(this.homeService.returnValue());
  }
  onSubmit()
  {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>
  {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
          if(control.value === 'test@test.com')
          {
              resolve({'emailIsForbidden':true});
          }else 
          {
              resolve(null);
          }
      }, 1500)
    });
    return promise;
  }

}

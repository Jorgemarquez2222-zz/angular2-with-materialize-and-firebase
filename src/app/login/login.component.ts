import { Component, OnInit } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login : string= "Login";
user = {};
  constructor(public _serviceAuthService:ServiceAuthService) {

     this._serviceAuthService.af.auth.subscribe(user => {
        if(user) {
          // user logged in
          this.login = 'Logout';
          this.user = user;
        }
        else {
           // user not logged in
          this.login = "Log in";
          this.user = {};
        }
      });
   }

  ngOnInit() {
  }

login2(){
   this._serviceAuthService.logeado ? 'Logout' : 'Login';
  if(this._serviceAuthService.logeado){
    this._serviceAuthService.logout();
  }else{
    this._serviceAuthService.login2();
  }
}
}

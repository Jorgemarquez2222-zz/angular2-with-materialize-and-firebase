import { Component,ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceAuthService } from '../services/service-auth.service';

declare var jQuery:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit  {

login : string= "Login";
user = {};
  constructor(public _serviceAuthService:ServiceAuthService,  private router:Router,private _elRef: ElementRef) {
    
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

ngOnInit(){
  let a = jQuery(this._elRef.nativeElement).find('.button-collapse');
  a.sideNav();

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

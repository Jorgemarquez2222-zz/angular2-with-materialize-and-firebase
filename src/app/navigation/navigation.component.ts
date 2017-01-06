import { Component,ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

declare var jQuery:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit  {

login : string= "Login";
user = {};
  constructor(public _authService: AuthService,  private router:Router,private _elRef: ElementRef) {
    
    this._authService.af.auth.subscribe(user => {
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
 
    this._authService.logeado ? 'Logout' : 'Login';
 
    if(this._authService.logeado){
      this._authService.logout();
    }else{
      this._authService.login2();
    }
  }

  
  
}

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  items: FirebaseListObservable<any>;
  user = {};
  
  logeado: boolean= false;
 
  constructor(private router:Router, public af: AngularFire) {
     this.af.auth.subscribe(user => {
        if(user) {
          // user logged in
          this.user = user;
          this.logeado = true;
          this.router.navigate(['inicio']);
        }
        else {
          // user not logged in
          this.user = {};
          this.router.navigate(['/']);
          this.logeado = false;
        }
      });
   }

  ngOnInit() {

  }

  login(email: string, pass: string) {

        this.af.auth.login({
            email: email,
            password: pass,
          })     
  }
  login2() {
      this.af.auth.login(); 
  }

  logout() {
    this.af.auth.logout();
  }
  
  singUp(email:string, pass:string){
  this.af.auth.createUser(
      {
        email:email,
        password:pass
      }
    ) ;
  }

}

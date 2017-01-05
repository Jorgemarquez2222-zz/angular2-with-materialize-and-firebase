import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  items: FirebaseListObservable<any>;
  user = {};
  logeado: boolean= false;


  constructor(private router:Router, public af: AngularFire) {
     this.af.auth.subscribe(user => {
        if(user) {
          // user logged in
          this.user = user;
          this.items = af.database.list('/');
          this.logeado = true;
          console.log(this.logeado);
        
       this.router.navigate(['mostrar']);
        }
        else {
          // user not logged in
          this.user = {};
          this.router.navigate(['/']);
          console.log(this.router.url);
          this.logeado = false;
          console.log(this.logeado);
          
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
       console.log(this.router.url);
       

    }

    addItem(newName: string) {
      this.items.push({ text: newName });
    }
    updateItem(key: string, newText: string) {
      this.items.update(key, { id: newText });
    }
    deleteItem(key: string) {    
      this.items.remove(key); 
    }
    deleteEverything() {
      this.items.remove();
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

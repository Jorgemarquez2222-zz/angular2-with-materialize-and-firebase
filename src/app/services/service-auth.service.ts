import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { Miembros } from '../interfaceMiembros';
@Injectable()
export class ServiceAuthService {
items: FirebaseListObservable<any>;
  user = {};
  
  logeado: boolean= false;
 
  constructor(private router:Router, public af: AngularFire) {
     this.af.auth.subscribe(user => {
        if(user) {
          // user logged in
          this.user = user;
          //this.items = af.database.list('/');
          this.logeado = true;
          console.log(this.logeado);
        
       this.router.navigate(['imagenes']);
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
    }
    
    getMiembros(){
      this.items = this.af.database.list('/');
      return this.items.map(
        res => res
      ) ;
    }

    addItem(id:string,title:string,body:string,background:string,imgPerfil:string) {
      //this.items.push({ text: newName });
      this.items.push({id:id,title:title,body:body,colorFondo:background,imgPerfil:imgPerfil});
     

    }
    updateItem(miembro: Miembros, key: string) {
      this.items.update(key, {background: miembro.colorFondo, id:miembro.id, title: miembro.title,body:miembro.body,  imgPerfil: miembro.imgPerfil });
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

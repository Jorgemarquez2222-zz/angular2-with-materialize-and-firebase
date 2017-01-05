import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Miembros } from '../interfaceMiembros';

declare var firebase: any;

@Injectable()
export class ServiceFirebaseService {
  
  miembros: Miembros[] = [];

  constructor(private _http : Http) {

   let a= firebase.database().ref('/').on('child_removed', function(snapshot) {
    
              //console.log(snapshot.val());
              // console.log(this.miembros);
            //   this.posicion = this.miembros.indexOf(snapshot.val());
            // this.miembros.splice(this.posicion,1);

          return snapshot.val();

        });
        console.log(a);

   }

  fbGetDataFirebase(){
    return this._http.get('https://prueba-37267.firebaseio.com/.json')
    .map(res => res.json());

  }

    
  

}

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Miembros } from '../interfaces/interfaceMiembros';


@Injectable()
export class FirebaseDataService {
items: FirebaseListObservable<any>;

  constructor(public af: AngularFire) { }
   
    getMiembros(){
      this.items = this.af.database.list('/');
      return this.items.map(
        res => res
      ) ;
    }

    addItem(title:string,body:string,background:string,imgPerfil:string) {
      this.items.push({title:title,body:body,colorFondo:background,imgPerfil:imgPerfil});
    }

    updateItem(miembro: Miembros, key: string) {
      this.items.update(key, 
      {
        colorFondo: miembro.colorFondo, 
        title: miembro.title,body:miembro.body,  
        imgPerfil: miembro.imgPerfil 
      });
    }
    
    deleteItem(key: string) {    
      this.items.remove(key); 
    }
    deleteEverything() {
      this.items.remove();
    }
   

}

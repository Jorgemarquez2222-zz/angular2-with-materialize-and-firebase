import { Component, OnInit,EventEmitter, } from '@angular/core';
import { Miembros } from '../interfaces/interfaceMiembros';
import { ServicelocalService } from '../services/servicelocal.service';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from '../services/auth.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseDataService } from '../services/firebase-data.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {

  modificaMiembro: boolean= false;
  idMod: string = "-1";
  miembros: Miembros[];
  searchSrt: string= "";

  constructor(
    private _servicioLocal: ServicelocalService,
    private _authService: AuthService,
    private _firebaseDataService : FirebaseDataService,
    public af: AngularFire,
    private router:Router
    ) { 
        this.af.auth.subscribe(user => {
        if(!user) {
          this.router.navigate(['/']);
        }else{
           this._firebaseDataService.getMiembros().subscribe(
            res => this.miembros = res // console.log(res)
            );
        }
      });
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  globalActions = new EventEmitter<string|MaterializeAction>();
  params = []
  printSomething() {
    console.log("tooltip button clicked!");
  }
  triggerToast() {
    this.globalActions.emit('toast')
  }
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
  
  delMiembroArray(miembro : string){
    this._firebaseDataService.deleteItem(miembro);
  }

  addMiembro(id:string,title:string,body:string,background:string,imgPerfil:string){
     this._firebaseDataService.addItem(id,title,body,background,imgPerfil);
  }

  modMiembro(miembro : Miembros, key:string){
     
    if(this.idMod != "-1"){
      this.idMod = "-1";
      this._firebaseDataService.updateItem(miembro,key);
    } else{
      this.idMod = key;
    }
  }

  searchMiembro(){
    this.miembros =this._servicioLocal.searchSrt(this.searchSrt);
  }

}

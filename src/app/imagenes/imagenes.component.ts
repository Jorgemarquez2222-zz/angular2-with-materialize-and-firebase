import { Component, OnInit,EventEmitter, } from '@angular/core';
import { Miembros } from '../interfaceMiembros';
import { ServicelocalService } from '../services/servicelocal.service';
import { MaterializeAction } from 'angular2-materialize';
import { ServiceAuthService } from '../services/service-auth.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
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
    private servicioLocal: ServicelocalService,
    private _serviceAuthService: ServiceAuthService,
    public af: AngularFire,
    private router:Router
    ) { 
        this.af.auth.subscribe(user => {
        if(!user) {
          this.router.navigate(['/']);
        }else{
           this._serviceAuthService.getMiembros().subscribe(
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
    //let posicion = this.miembros.indexOf(miembro);
    this._serviceAuthService.deleteItem(miembro);
  }

  addMiembro(id:string,title:string,body:string,background:string,imgPerfil:string){
    // let objeto: Miembros;
    //  objeto={
    //   id:id,
    //   title:title,
    //   body:body,
    //   url:"",
    //   thumbnailUrl:"",
    //   colorFondo:backgroung,
    //   imgPerfil:imgPerfil
    // }
    // this.miembros.push(objeto);
     this._serviceAuthService.addItem(id,title,body,background,imgPerfil);
  }

  modMiembro(miembro : Miembros, key:string){
     
    if(this.idMod != "-1"){
      this.idMod = "-1";
      console.log('if');
    this._serviceAuthService.updateItem(miembro,key);
      
    } else{
console.log('else');      
    this.idMod = key;
    

    }

    //this._serviceAuthService.updateItem(miembro,key);
  }

  searchMiembro(){
    this.miembros =this.servicioLocal.searchSrt(this.searchSrt);
  }

}

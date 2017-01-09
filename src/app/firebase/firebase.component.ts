import { Component, OnInit,EventEmitter, ElementRef} from '@angular/core';
import { Miembros } from '../interfaces/interfaceMiembros';
import { MaterializeAction } from 'angular2-materialize';
import { AuthService } from '../services/auth.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseDataService } from '../services/firebase-data.service';
import { SpinnerService } from '../services/spinner.service';
declare var jQuery:any;

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})

export class FirebaseComponent implements OnInit{

  modificaMiembro: boolean= false;
  idMod: string = "-1";
  miembros: Miembros[];
  portion: string= "";

  constructor(
    private _authService: AuthService,
    public _spinner: SpinnerService,
    private _firebaseDataService : FirebaseDataService,
    public af: AngularFire,
    private router:Router,
    private _elRef: ElementRef
    ) { }

  getFirebaseData(){
    this.af.auth.subscribe(user => {
        if(!user) {
          this.router.navigate(['/']);
        }else{
           this._firebaseDataService.getMiembros().subscribe(
            res => {
              this.miembros = res;
              this._spinner.stop();
              }
            );
        }
      });
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  globalActions = new EventEmitter<string|MaterializeAction>();
  params = [];

  initModal(){
    jQuery(this._elRef.nativeElement).find('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    });
  }

  ngOnInit(){
    this.initModal();
    this._spinner.start();
    this.getFirebaseData();
  }

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

  addMiembro(title:string,body:string,background:string,imgPerfil:string){
     this._firebaseDataService.addItem(title,body,background,imgPerfil);
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
    if(this.miembros = this.searchSrt(this.portion)){}
  }

   
  searchSrt(srt : string){
    this.getFirebaseData()
    let miembrReplace : Miembros[] = [];

    this.miembros.forEach(element => {
    if(element.body.toUpperCase().match(srt.toUpperCase())!= null){
      miembrReplace.push(element);
    }
    });
    return  miembrReplace;
  }
   
}

import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  miembros: Miembros[] = [];
  posicion : number =0;
  items: FirebaseListObservable<any>;

  constructor( 
      private _servicio : PlaceHolderService,
      public _spinner: SpinnerService,
      public af: AngularFire,
      private router:Router
   ) {
     this.af.auth.subscribe(user => {
        if(!user) {
          this.router.navigate(['/']);
        }
      });
   }

 ngOnInit(){
   
     this._spinner.start();

     this._servicio.getCards()
     .subscribe(
       res =>{ 
         console.log(res);
         //this.miembros = res
           this._spinner.stop();
         }
     );
  }


  ngOnDestroy(){
    this._spinner.stop();
  }

}

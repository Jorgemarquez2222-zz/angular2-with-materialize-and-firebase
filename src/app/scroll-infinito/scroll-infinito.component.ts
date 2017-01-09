import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaces/interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scroll-infinito',
  templateUrl: './scroll-infinito.component.html',
  styleUrls: ['./scroll-infinito.component.css']
})
export class ScrollInfinitoComponent  implements OnInit{

  miembros: Miembros[] = []; 
  start: number = 0;
  end: number = 6;

  constructor(
    private _servicio : PlaceHolderService, 
    public _spinner: SpinnerService,
    public af: AngularFire,
    private router:Router
  ) { 
    this.af.auth.subscribe(user => {
        if(!user) {
          this.router.navigate(['/']);
        }else{
           this.miembros = [];
        }
      });
  }

    callCardsScroll(){
      
        this._servicio.getCardsScroll(this.start,this.end).subscribe(
          tarjeta => { 
            console.log(tarjeta);
            tarjeta.forEach(element => {
              if(tarjeta.length > 0){
                this.miembros.push(element);
              }
            });
          this._spinner.stop();
          });
    }

     ngOnInit(){
       this._spinner.start();
       this.callCardsScroll();
       
     }

    ngOnDestroy(){
      this._spinner.stop();
    }

    onScroll () {
            console.log('scrolled!!')
        }

    onScrollDown () {
       this.start = this.end; 
       this.end= this.end + 6;
      this.callCardsScroll();
    }
  
    onScrollUp () {
      console.log('scrolled up!!')
    }

}

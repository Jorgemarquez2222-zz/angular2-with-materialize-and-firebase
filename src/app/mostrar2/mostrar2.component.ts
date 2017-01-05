import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-mostrar2',
  templateUrl: './mostrar2.component.html',
  styleUrls: ['./mostrar2.component.css']
})
export class Mostrar2Component  implements OnInit{

 miembros: Miembros[];
 _start: number = 0;
 _end: number = 6;
  constructor(private servicio : PlaceHolderService, public spinner: SpinnerService) { 
    this.miembros = [];
  }

    callCardsScroll(){
      
        this.servicio.getCardsScroll(this._start,this._end).subscribe(
          tarjeta => { 
            console.log(tarjeta);
            tarjeta.forEach(element => {
              if(tarjeta.length > 0){
                this.miembros.push(element);
              }
            
            });
          //this.spinner.stop();
          });
         
            
    }

     ngOnInit(){
       this.spinner.start();
       console.log('ngOnInit');
       this.callCardsScroll();
       
     }

    ngOnDestroy(){
      //this.spinner.stop();
    }

    onScroll () {
            console.log('scrolled!!')
        }

    onScrollDown () {
       console.log('onScrollDown');
       this._start = this._end; 
       this._end= this._end + 6;
      this.callCardsScroll();  
        
     
    }
  
    onScrollUp () {
      console.log('scrolled up!!')
    }

}

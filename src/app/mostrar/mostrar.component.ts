import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  miembros: Miembros[] = [];
  posicion : number =0;

  constructor(private servicio : PlaceHolderService,
   public spinner: SpinnerService
   ) {}

 ngOnInit(){
   
     this.spinner.start();

     this.servicio.getCards()
     .subscribe(
       res =>{ 
         console.log(res);
         //this.miembros = res
           this.spinner.stop();
         }
     );
  }


  ngOnDestroy(){
    this.spinner.stop();
  }

}

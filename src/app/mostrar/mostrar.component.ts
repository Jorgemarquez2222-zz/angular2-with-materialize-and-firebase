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
         this.miembros = res
           this.spinner.stop();
         }
     );

    //this.fbGetData(); 
    
  }


  // fbGetData(){
  //   firebase.database().ref('/').on('child_added', (snapshot) => {
  //     this.miembros.unshift(snapshot.val()) ;
  //     this.spinner.stop();
  //   })  
  // }

  // fbPostData(id:string,title:string,body:string,backgroung:string,imgPerfil:string){
  //   firebase.database().ref('/').push({id:id,title:title,body:body,backgroung:backgroung,imgPerfil:imgPerfil});
  //   console.log('adicionado un elemento');
  // }


  ngOnDestroy(){
    this.spinner.stop();
  }

}

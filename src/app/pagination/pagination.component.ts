import { Component, OnInit } from '@angular/core';
import { PlaceHolderService } from '../services/place-holder.service';
import { Miembros } from '../interfaceMiembros';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit  {

  miembros : Miembros[];

  constructor(private servicio : PlaceHolderService, public spinner: SpinnerService) { 
  }

    ngOnInit(){
       this.spinner.start();

    this.servicio.getCardsPagination().subscribe(
     tarjeta => { 
       this.miembros = tarjeta;
       this.spinner.stop();
    });
    }

  OnDestroy(){
       this.spinner.stop();
  }


  }



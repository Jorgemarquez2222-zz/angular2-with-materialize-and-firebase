import { Component } from '@angular/core';
import { Miembros } from '../interfaceMiembros';
import { ServicelocalService } from '../services/servicelocal.service';

@Component({
  selector: 'app-grillas',
  templateUrl: './grillas.component.html',
  styleUrls: ['./grillas.component.css']
})
export class GrillasComponent {

  miembros: Miembros[];
  constructor(private servicioLocal: ServicelocalService) { 
   this.miembros=this.servicioLocal.getMiembros();
  }
  
  

}

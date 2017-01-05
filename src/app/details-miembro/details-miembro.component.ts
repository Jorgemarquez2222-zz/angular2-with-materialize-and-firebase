import { Component, OnInit } from '@angular/core';
import { Miembros } from '../interfaceMiembros';
import { ActivatedRoute } from '@angular/router';
import { ServicelocalService } from '../services/servicelocal.service';

@Component({
  selector: 'app-details-miembro',
  templateUrl: './details-miembro.component.html',
  styleUrls: ['./details-miembro.component.css']
})
export class DetailsMiembroComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private servicelocal : ServicelocalService) { }

  idMiembro:string;
  miembro : Miembros;

    ngOnInit(){
         this._route.params
            .map(params => params['id'] )
            .subscribe((id) => {
              this.idMiembro = id;
                });
      this.miembro = this.servicelocal.getMiembro(this.idMiembro);
      
    }
    
}

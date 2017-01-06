import { Component, OnInit } from '@angular/core';
import { Miembros } from '../interfaceMiembros';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-details-miembro',
  templateUrl: './details-miembro.component.html',
  styleUrls: ['./details-miembro.component.css']
})
export class DetailsMiembroComponent implements OnInit {

  edit: boolean = false;

  constructor(private _route:ActivatedRoute, 
      private _authService: AuthService,
  ) { }

  idMiembro:string;
  miembro : Miembros;

    ngOnInit(){
         this._route.params
            .map(params => params['id'] )
            .subscribe((id) => {
              this.idMiembro = id;            
              this.getMiembro(this.idMiembro);
                });
    }

    getMiembro(id:string){
      let miembro: Miembros;
      this._authService.getMiembros().subscribe(
        res => 
        {
          res.forEach(element => {
            if(element.$key.toUpperCase() == id.toUpperCase()){
              this.miembro = element;
            }
          });
        }
      )
    }

    modMiembro(miembro : Miembros, key : string){
      this.edit = !this.edit;
      // if(!this.edit){
      //   console.log("modificado");
      // console.log(miembro);
        console.log("mod");
        this._authService.updateItem(miembro,key);
      // }
    }
    
}

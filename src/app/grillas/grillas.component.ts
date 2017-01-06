import { Component } from '@angular/core';
import { Miembros } from '../interfaceMiembros';
import { ServicelocalService } from '../services/servicelocal.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-grillas',
  templateUrl: './grillas.component.html',
  styleUrls: ['./grillas.component.css']
})
export class GrillasComponent {

  miembros: Miembros[];
  constructor(
    private _servicioLocal: ServicelocalService,
     public af: AngularFire,
   private router:Router
  ) { 
    this.af.auth.subscribe(user => {
        if(!user) {
          this.router.navigate(['/']);
        }else{
         this._servicioLocal.getMiembros().subscribe(res => {
            this.miembros = res;
        })
        }
      });
   
  }
  
  

}

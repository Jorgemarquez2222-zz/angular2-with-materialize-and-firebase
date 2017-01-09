import { Component, OnInit } from '@angular/core';
import { Miembros } from '../interfaces/interfaceMiembros';
import { ServicelocalService } from '../services/servicelocal.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import {SpinnerService} from '../services/spinner.service';

@Component({
  selector: 'app-data-local',
  templateUrl: './data-local.component.html',
  styleUrls: ['./data-local.component.css']
})
export class DataLocalComponent implements OnInit {

  miembros: Miembros[];
  constructor(
    private _servicioLocal: ServicelocalService,
     public af: AngularFire,
   private router:Router,
   private _spinner : SpinnerService
  ) { }

  getData(){
    this.af.auth.subscribe(user => {
        if(!user) {
          this.router.navigate(['/']);
        }else{
         this._servicioLocal.getMiembros().subscribe(res => {
            this.miembros = res;
            this._spinner.stop();
        })
        }
      });
  }

  ngOnInit(){
    this._spinner.start();
    this.getData();
  }

}

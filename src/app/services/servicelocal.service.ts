import { Injectable } from '@angular/core';
import { Miembros } from '../interfaceMiembros';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ServicelocalService {

  miembros: Miembros[] = [];

  constructor(public _http : Http ) {}

    getMiembros(){
        return this._http.get('http://localhost:4200/app/json/miembros.json')
        .map( jh => jh.json())
      } 

     searchSrt(srt : string){
        let miembros2 :Miembros[]= [];
        this.miembros.forEach(element => {
        if(element.body.toUpperCase().match(srt.toUpperCase())!= null){
            miembros2.push(element);
        }
      });
      return miembros2;
    }

    getMiembro(id:string){

      
        
    }
  
    delMiembroArray(miembro : Miembros){
    let posicion = this.miembros.indexOf(miembro);
    this.miembros.splice(posicion,1);
    return  this.miembros.map(res => res);
  }  

  addMiembro(id:string,title:string,body:string,backgroung:string,imgPerfil:string){
    let objeto: Miembros;
     objeto={
      id:id,
      title:title,
      body:body,
      url:"",
      thumbnailUrl:"",
      colorFondo:backgroung,
      imgPerfil:imgPerfil
    }
    this.miembros.push(objeto);
    return this.miembros;
  }
}

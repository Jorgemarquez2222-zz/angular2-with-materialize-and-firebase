import { Injectable } from '@angular/core';
import { Miembros } from '../interfaceMiembros';
import 'rxjs/add/operator/map';
@Injectable()
export class ServicelocalService {

  miembros: Miembros[]=[];

  constructor() {
    this.miembros =[
        {
        id:"3",
        title: "Titulo3",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 3`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"4"
      },{
        id:"4",
        title: "Titulo4",
        body: `
        Lorem jeannelis  sit amet, consectetur adipisicing elit, sed do eiusmod 4`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"purple",
        imgPerfil:"5"
      },{
        id:"5",
        title: "Titulo5",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 5`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"grey",
        imgPerfil:"6"
      },{
        id:"6",
        title: "Titulo6",
        body: `
        Lorem pulga sit amet, consectetur adipisicing elit, sed do eiusmod 6`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"7"
      },{
        id:"7",
        title: "Titulo7",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 7`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"8"
      },{
        id:"8",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 8`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"9"
      },{
        id:"9",
        title: "Titulo9",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 9`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"pink",
        imgPerfil:"10"
      },{
        id:"10",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 10`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"11"
      },{
        id:"11",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 11`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"12"
      },{
        id:"12",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 12`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"purple",
        imgPerfil:"13"
      },{
        id:"13",
        title: "Titulo8",
        body: `
        Lorem pulga sit amet, consectetur adipisicing elit, sed do eiusmod 13`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"14"
      },{
        id:"14",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 14`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"15"
      },{
        id:"15",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 15`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"white",
        imgPerfil:"16"
      },{
        id:"17",
        title: "Titulo8",
        body: `
        Lorem pulga sit amet, consectetur adipisicing elit, sed do eiusmod 17`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"18"
      },{
        id:"18",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 18`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"19"
      },{
        id:"19",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 19`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"orange",
        imgPerfil:"20"
      },{
        id:"22",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 22`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"yellow",
        imgPerfil:"23"
      },{
        id:"23",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur qwe asd adipisicing elit, sed do eiusmod 23`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"lime",
        imgPerfil:"24"
      },{
        id:"24",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 24`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"25"
      },{
        id:"25",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 25`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"purple",
        imgPerfil:"26"
      },{
        id:"26",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 26`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"27"
      },{
        id:"27",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 27`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"28"
      },{
        id:"28",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 28`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"grey",
        imgPerfil:"29"
      },{
        id:"29",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 29`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"pink",
        imgPerfil:"30"
      },{
        id:"30",
        title: "Titulo8",
        body: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 30`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"blue",
        imgPerfil:"31"
      },{
        id:"31",
        title: "Vote y perdí :(",
        body: `
        votar sit amet, consectetur adipisicing elit, sed do eiusmod 31`,
        url:"",
        thumbnailUrl:"",
        colorFondo:"brown",
        imgPerfil:"32"
      }] ;
   }


  getMiembros(){
      return this.miembros.map(res => res );
    } 

     searchSrt(srt : string){
      //  this.miembros = this.getMiembros();
        let miembros2 :Miembros[]= [];
        this.miembros.forEach(element => {
        if(element.body.toUpperCase().match(srt.toUpperCase())!= null){
            miembros2.push(element);
        }
      });
      return miembros2;
    }

    getMiembro(id:string){
      // this.miembros=this.getMiembros();
      let miembro: Miembros;
      this.miembros.forEach(element => {
          if(element.id.toUpperCase() == id.toUpperCase()){
              miembro = element;
          }
        });
        return miembro;
    }
  
  delMiembroArray(miembro : Miembros){
    let posicion = this.miembros.indexOf(miembro);
    this.miembros.splice(posicion,1);
    return this.miembros;
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

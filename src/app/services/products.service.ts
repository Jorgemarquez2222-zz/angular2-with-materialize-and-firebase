import { Injectable } from '@angular/core';
import { Product } from '../interfaceProduct';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products : Product[] = [];
  constructor(private _http : Http) { 
    
  }

  getProducts(){
        return this._http.get('http://localhost:4200/app/json/products.json')
        .map( jh => jh.json())
      }


}
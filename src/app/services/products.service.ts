import { Injectable } from '@angular/core';
import { Product } from '../interfaces/interfaceProduct';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products : Product[] = [];
  constructor(private _http : Http) {}

  getProducts(){
        return this._http.get('/app/json/products.json')
        .map( res => res.json())
      }


}

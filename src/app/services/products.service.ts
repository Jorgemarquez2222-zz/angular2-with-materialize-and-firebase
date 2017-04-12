import { Injectable } from '@angular/core';
import { Product } from '../interfaces/interfaceProduct';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService {

  products : Product[] = [];
  constructor(private _http : Http) {}

  getProducts(){
        return this._http.get('http://localhost:3000/users')
        .map( res => res.json())
      }


}

import { Injectable } from '@angular/core';
import {Product} from '../interfaces/interfaceProduct';
import {ProductCart} from '../interfaces/interfaceProductCart';


@Injectable()
export class CartService {

  private products : ProductCart[]=[];
  private details : any;

  constructor( ) {
    
    //this.products=[{}];
    this.details= {total :0 , items:0};
   }

   getProducts(){
     return this.products;
   }

  getDetails(){
    return  this.details;
  }
  
  addToCart(product: ProductCart){
    if( this.products.indexOf(product) == -1 ){
      product.quantity=1;
      this.products.push(product)
    }else{
      let index = this.products.indexOf(product);
      this.products[index].quantity += 1;
    }
    this.details.items += 1;
    this.details.total += product.price;
  }

  deleteToCart(product: ProductCart){
    let index = this.products.indexOf(product);
    this.products.splice(index,1);
    this.details.items -= product.quantity;
    this.details.total -= (product.price * product.quantity);
  }

}

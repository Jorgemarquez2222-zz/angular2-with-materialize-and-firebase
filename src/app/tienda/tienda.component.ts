import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaceProduct';
import {CartService} from '../services/cart.service';
import {ProductCart} from '../interfaceProductCart';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {

  products : Product;

  constructor( private _serviceProducts : ProductsService,
  private _cartService : CartService
   ) { 
     this._serviceProducts.getProducts()
      .subscribe(
        res => this.products = res 
      );
    }

  ngOnInit() {
  }
  
  addProduct( product : ProductCart){
    this._cartService.addToCart(product);
  }

}

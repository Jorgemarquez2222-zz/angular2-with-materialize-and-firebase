import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/interfaceProduct';
import {CartService} from '../services/cart.service';
import {ProductCart} from '../interfaces/interfaceProductCart';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent implements OnInit {

  products : Product;
  details : any;
  ver : boolean = false;

  constructor( private _serviceProducts : ProductsService,
  private _cartService : CartService
   ) { 
     this._serviceProducts.getProducts()
      .subscribe(
        res => this.products = res 
      );
       this.details = this._cartService.getDetails();
    }

  ngOnInit() {
  }
  
  addProduct( product : ProductCart){
    this._cartService.addToCart(product);
  }

  
}

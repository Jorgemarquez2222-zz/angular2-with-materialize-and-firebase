import { Component, OnInit } from '@angular/core';
import {CartService } from '../services/cart.service';
import {Product} from '../interfaces/interfaceProduct';
import {ProductCart} from '../interfaces/interfaceProductCart';
@Component({
  selector: 'app-details-cart',
  templateUrl: './details-cart.component.html',
  styleUrls: ['./details-cart.component.css']
})
export class DetailsCartComponent implements OnInit {

  private products : ProductCart[]=[];
  private details : any;
  
  constructor( private _serviceCart : CartService ) { }

  ngOnInit() {
    this.products = this._serviceCart.getProducts();
    this.details = this._serviceCart.getDetails();
    console.log(this.products);
    console.log(this.details);
  }

}

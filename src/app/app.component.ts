import { Component } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-product';

  products: Product[]= [
    {
      code:"12345678",
      name:"Pack Palmeritas",
      price: 1.80,
      units: 2
    },
    {
      code:"6737373",
      name:"Brick leche",
      price: 1.20,
      units: 6
    },
    {
      code:"912354",
      name:"Botella 2L Coca Cola",
      price: 2.5,
      units: 1
    }
  ];

  constructor(){
    console.log("Precio total " + this.getTotalPrice());
  }

  getTotalPrice(): number{
    let total = 0;
    for(let product of this.products){
      total += product.price * product.units;
    }
    return total;
  }



}



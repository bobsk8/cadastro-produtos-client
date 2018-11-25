import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.products.push(event.product);
  }
}

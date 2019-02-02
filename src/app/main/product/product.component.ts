import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  submitted = false;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  onSubmit(event) {
    this.productService.createProduct(event.product)
    .subscribe(res => {
      this.products.push(event.product);
    });
  }

  getProducts() {
    this.productService.getProducts()
    .subscribe(res => this.products = res);
  }
}

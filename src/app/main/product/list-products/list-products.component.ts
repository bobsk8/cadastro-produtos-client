import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Product } from '../product';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-lista-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input() products: Product[] = [];
  animal: string;
  name: string;
  constructor(
    public dialog: MatDialog,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  removerProduct(idx: any, id: any) {
    this.productService.deleteProduct(id)
    .subscribe(res => {
      this.products.splice(idx, 1);
    });    
  }

  updateProduct(id: number, product: any) {
    this.productService.updateProduct(id, product)
    .subscribe(res => console.log());
  }

  openDialog(product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '300px',
      data: {id: product.id, name: product.name, price: product.price}
    });

    dialogRef.afterClosed().subscribe(result => {
      product.id = result.id;      
      product.name = result.name;
      product.price = result.price;
      this.updateProduct(product.id, product);
    });
  }

}

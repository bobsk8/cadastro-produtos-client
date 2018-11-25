import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Product } from '../product';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

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
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  removerProduct(idx) {
    this.products.splice(idx, 1);
  }

  openDialog(product): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '300px',
      data: {name: product.name, price: product.price}
    });

    dialogRef.afterClosed().subscribe(result => {
      product.name = result.name;
      product.price = result.price;
    });
  }

}

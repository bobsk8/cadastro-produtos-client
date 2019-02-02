import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductFormComponent } from './product-form/product-form.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [
    HighlightDirective,
    ProductComponent,
    ListProductsComponent,
    ProductFormComponent,
    ProductDialogComponent
  ],
  entryComponents: [
    ProductDialogComponent
  ]
})
export class ProductModule { }

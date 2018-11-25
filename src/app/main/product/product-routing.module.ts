import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductGuard } from 'src/app/guards/product.guard';
import { ProductDeactivateGuard } from 'src/app/guards/product.deactivate.guard';

const routes: Routes = [
  {
    path: '', component: ProductComponent,
    canActivateChild: [ProductGuard],
    canDeactivate: [ProductDeactivateGuard],
    children: [
      { path: 'editar', component: ProductFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

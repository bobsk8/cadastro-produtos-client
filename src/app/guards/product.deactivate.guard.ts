import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { ProductFormComponent } from '../main/product/product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDeactivateGuard implements CanDeactivate<ProductFormComponent> {

  canDeactivate(
    component: ProductFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let confirmacao = false;

    if (!component.submitted && component.formulario && component.formulario.touched) {
      confirmacao = confirm('Deseja sair do formulário?');
      return confirmacao;
    }
    return true;
  }
}

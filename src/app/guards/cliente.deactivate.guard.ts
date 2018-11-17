import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { ClienteFormComponent } from '../main/cliente/cliente-form/cliente-form.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteDeactivateGuard implements CanDeactivate<ClienteFormComponent> {

  canDeactivate(
    component: ClienteFormComponent,
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

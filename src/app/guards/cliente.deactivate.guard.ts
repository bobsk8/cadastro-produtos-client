import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { ClienteComponent } from '../cliente/cliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteDeactivateGuard implements CanDeactivate<ClienteComponent> {
  constructor(
    private router: Router
  ) { }

  canDeactivate(
    component: ClienteComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('saindo');
    console.log(component.submitted);
    return true;
  }
}

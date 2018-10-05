import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClienteComponent } from './cliente.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';
import { ClienteGuard } from '../guards/cliente.guard';
import { ClienteDeactivateGuard } from '../guards/cliente.deactivate.guard';

const routes: Routes = [
  {
    path: '', component: ClienteComponent,
    canActivateChild: [ClienteGuard],
    canDeactivate: [ClienteDeactivateGuard],
    children: [
      { path: ':id', component: ClienteEditarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

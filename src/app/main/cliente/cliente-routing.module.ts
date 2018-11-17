import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ClienteComponent } from './cliente.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteGuard } from 'src/app/guards/cliente.guard';
import { ClienteDeactivateGuard } from 'src/app/guards/cliente.deactivate.guard';

const routes: Routes = [
  {
    path: '', component: ClienteComponent,
    canActivateChild: [ClienteGuard],
    canDeactivate: [ClienteDeactivateGuard],
    children: [
      { path: 'editar', component: ClienteFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

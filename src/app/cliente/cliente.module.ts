import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteComponent } from './cliente.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClienteComponent,
    ListaClientesComponent,
    ClienteEditarComponent
  ]
})
export class ClienteModule { }

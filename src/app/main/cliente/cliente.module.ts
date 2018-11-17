import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HighlightDirective,
    ClienteComponent,
    ListaClientesComponent,
    ClienteFormComponent
  ]
})
export class ClienteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { HighlightDirective } from 'src/app/directives/highlight.directive';
import { ClienteDialogComponent } from './cliente-dialog/cliente-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  declarations: [
    HighlightDirective,
    ClienteComponent,
    ListaClientesComponent,
    ClienteFormComponent,
    ClienteDialogComponent
  ],
  entryComponents: [
    ClienteDialogComponent
  ]
})
export class ClienteModule { }

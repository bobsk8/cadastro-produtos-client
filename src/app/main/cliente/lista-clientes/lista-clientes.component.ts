import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Cliente } from '../cliente';
import { ClienteDialogComponent } from '../cliente-dialog/cliente-dialog.component';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  @Input() clientes: Cliente[] = [];
  animal: string;
  name: string;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  removerClientes(idx) {
    this.clientes.splice(idx, 1);
  }

  openDialog(client): void {
    const dialogRef = this.dialog.open(ClienteDialogComponent, {
      width: '300px',
      data: {nome: client.nome, idade: client.idade}
    });

    dialogRef.afterClosed().subscribe(result => {
      client.nome = result.nome;
      client.idade = result.idade;
    });
  }

}

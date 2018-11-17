import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  @Input() clientes: Cliente[] = [];
  constructor() { }

  ngOnInit() {
  }

  removerClientes(idx) {
    this.clientes.splice(idx, 1);
  }

}

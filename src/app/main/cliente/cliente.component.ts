import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.clientes.push(event.cliente);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Cliente } from './cliente';
import { Sexo } from './sexo';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente;
  clientes: Cliente[];
  sexos: Sexo[];
  formulario: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.clientes = [];
    this.sexos = [];
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      idade: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      sexo: ['', [Validators.required]]
    });
    this.getSexos();
  }

  get form() { return this.formulario.controls; }

  getSexos() {
    this.sexos.push(new Sexo('Masculino'));
    this.sexos.push(new Sexo('Feminino'));
  }

  onSubmit() {
    this.cliente = new Cliente();
    this.submitted = true;
    if (this.formulario.valid) {
      this.cliente.nome = this.formulario.controls.nome.value;
      this.cliente.idade = parseInt(this.formulario.controls.idade.value, 10);
      this.cliente.sexo = this.formulario.controls.sexo.value;
      this.clientes.push(this.cliente);
    }
  }
}

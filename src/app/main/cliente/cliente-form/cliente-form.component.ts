import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente';
import { Sexo } from '../sexo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  @Output() childSubmit = new EventEmitter<any>();
  cliente: Cliente;
  sexos: Sexo[];
  formulario: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cliente = new Cliente();
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

  onSubmit(formulario) {
    this.cliente = new Cliente();
    if (formulario.valid) {
      this.cliente.nome = formulario.controls.nome.value;
      this.cliente.idade = parseInt(formulario.controls.idade.value, 10);
      this.cliente.sexo = formulario.controls.sexo.value;
      this.submitted = true;
      this.childSubmit.emit({cliente: this.cliente});
    }
  }

}

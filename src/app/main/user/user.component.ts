import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  formulario: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.user = new User();
    this.formulario = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    });
  }

  get form() { return this.formulario.controls; }

  onSubmit(formulario) {
    this.user = new User();
    if (formulario.valid) {
      this.user.name = formulario.controls.name.value;
      this.user.email = formulario.controls.email.value;
      this.user.password = formulario.controls.password.value;
      this.submitted = true;
    }
  }

}

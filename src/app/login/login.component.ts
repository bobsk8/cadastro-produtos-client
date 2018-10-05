import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  submitted = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      pass: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      this.loginApp();
    }
  }

  get form() { return this.formulario.controls; }

  loginApp() {
    this.authService.fazerLogin(this.formulario.controls);
  }

  logoutApp() {
    sessionStorage.clear();
  }

}

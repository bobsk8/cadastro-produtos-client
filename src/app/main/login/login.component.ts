import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  submitted = false;
  login: Login;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      pass: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]]
    });
  }

  onSubmit() {
    this.login = new Login();
    this.submitted = true;
    if (this.formulario.valid) {
      this.login.username = this.formulario.controls.username.value;
      this.login.pass = this.formulario.controls.pass.value;
      this.loginApp(this.login);
    }
  }

  get form() { return this.formulario.controls; }

  loginApp(login) {
    this.authService.doLogin(login)
      .subscribe(res => {
        if (res.login) {
          this.authService.usuarioAutenticado = true;
          this.router.navigate(['home']);
        }
      });
  }

}

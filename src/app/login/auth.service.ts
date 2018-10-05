import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  fazerLogin(login: any) {
    if (login.username.value === 'teste' && login.pass.value === 'pass') {
      this.usuarioAutenticado = true;
      sessionStorage.setItem('login', 'true');
      this.router.navigate(['/home']);
    } else {
      this.usuarioAutenticado = false;
    }
  }
}

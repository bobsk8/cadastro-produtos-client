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

  doLogin(login: any) {
    if (login.username.value === 'bobsk8' && login.pass.value === 'vasco20') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['home']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}

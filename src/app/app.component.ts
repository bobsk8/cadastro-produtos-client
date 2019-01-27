import { Component, OnInit } from '@angular/core';

import { LoginEventService } from './main/login/login-event.service';
import { UserService } from './main/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto-estudo';
  mostrarMenu = false;

  constructor(
    private loginEventService: LoginEventService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginEventService.loginEmit.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserData()
      .subscribe(res => {
        if (res.login) {
          this.mostrarMenu = true;
        }
      }, err => {
        this.router.navigate(['']);
        localStorage.clear();
      });
  }
}

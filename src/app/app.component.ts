import { Component, OnInit } from '@angular/core';

import { LoginEventService } from './main/login/login-event.service';
import { UserService } from './main/user/user.service';

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
    private userService: UserService
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
      console.log('dadaos');
      console.log(res);
    })
  }
}

import { Injectable } from '@angular/core';
import { LoginEventService } from '../login-event.service';

@Injectable({
  providedIn: 'root'
})
export class LoginTransformService {

  constructor(
    private loginEventService: LoginEventService
  ) { }

  doLoginTransform(data: any) {
    if (data && data.login) {
      localStorage.setItem('token', data.token);
      this.loginEventService.loginEmit.emit(true);
    } else {
      localStorage.clear();
    }
  }

}

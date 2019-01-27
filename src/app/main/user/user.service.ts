import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserTransformService } from './tranform/user-transform.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(
    private userTransformService: UserTransformService,
    private http: HttpClient
  ) { }

  getUserData(): Observable<any> {
    return this.http.get('api/user/datas', this.httpOptions)
    .pipe(map(res => {
      this.userTransformService.doUserDataTransform(res['data']);
      return res['data'];
    }),
    catchError(this.userTransformService.erroUserDataTransform));
  }
}

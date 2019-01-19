import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { LoginEventService } from './login-event.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  usuarioAutenticado = false;
  constructor(
    private http: HttpClient,
    private loginEventService: LoginEventService
  ) { }

  doLogin(login: any): Observable<any> {
    return this.http.post('/api/auth-jwt/login', login, this.httpOptions)
      .pipe(map(res => res['data']),
      switchMap(data => {
        if (data.login) {
          localStorage.setItem('token', data.token);
          this.loginEventService.loginEmit.emit(true);
        }
        return of(data);
      }),
        catchError(this.handleError)
      );
  }

  getAutenticado() {
    return this.usuarioAutenticado;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTransformService {

  constructor() { }

  doUserDataTransform(data: any) {
    if (!data || !data.login) {
      localStorage.clear();
    }
  }

  erroUserDataTransform(error) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else if (error.error.type.error === 'Unauthorized') {
      console.log(`Não autorizado: ${error.status}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

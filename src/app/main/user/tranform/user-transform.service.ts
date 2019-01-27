import { Injectable } from '@angular/core';

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
}

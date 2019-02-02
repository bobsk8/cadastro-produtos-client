import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createProduct(product: any): Observable<any> {
    return this.http.post('api/products', product, this.httpOptions)
    .pipe(map(res => {
      return res['data'];
    }));
  } 

  getProducts(): Observable<any[]> {
    return this.http.get('api/products', this.httpOptions)
    .pipe(map(res => {
      return res['data'];
    }));
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`api/products/${id}`, this.httpOptions)
    .pipe(map(res => {
      return res['data'];
    }));
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`api/products/${id}`, product, this.httpOptions)
    .pipe(map(res => {
      return res['data'];
    }));
  }

}

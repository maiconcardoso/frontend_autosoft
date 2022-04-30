import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = `${environment.URL_API}/v1/products`

  constructor(private http: HttpClient, 
    private toastr: ToastrService,
    private router: Router) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  delete(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.delete<Product>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  showMessage(title: string, msg: string, type: string): void {
    this.toastr.show(msg, title, {closeButton: true, progressBar: true}, type);
  }

  showError(e: any): Observable<any> {
    this.showMessage('Erro!', 'Não foi possível realizar a operação', 'toast-error');
    this.router.navigate(['notfound']);
    return EMPTY;
  }

}

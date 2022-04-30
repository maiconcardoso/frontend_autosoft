import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = `${environment.URL_API}/v1/orders`;

  constructor(private http: HttpClient, 
    private toast: ToastrService,
    private router: Router) { }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readById(id: string): Observable<Order> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Order>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readByNameCustomer(nameCustomer: string): Observable<Order[]> {
    const url = `${this.baseUrl}/find?name=${nameCustomer}`;
    return this.http.get<Order[]>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  update(order: Order): Observable<Order> {
    const url = `${this.baseUrl}/${order.id}`;
    return this.http.put<Order>(url, order).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  delete(order: Order): Observable<Order> {
    const url = `${this.baseUrl}/${order.id}`;
    return this.http.delete<Order>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  showMessage(title: string, msg: string, type: string): void {
    this.toast.show(msg, title, {
      closeButton: true,
      progressBar: true
    }, type)
  }

  showError(e: any): Observable<any> {
    this.showMessage('Erro!', 'Não foi possível realizar a operação', 'toast-error');
    this.router.navigate(['notfound']);
    return EMPTY;
  }
}


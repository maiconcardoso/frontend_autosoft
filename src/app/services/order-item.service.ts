import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OrderItem } from '../model/order-Item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  baseUrl = `${environment.URL_API}/v1/order-items`;

  constructor(private http: HttpClient, 
    private toast: ToastrService,
    private router: Router) { }

  create(orderItem: OrderItem, id_order: string): Observable<OrderItem> {
    const url = `${this.baseUrl}?order=${id_order}`;
    return this.http.post<OrderItem>(url, orderItem).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readAll(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readById(id: string): Observable<OrderItem> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<OrderItem>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readByIdProduct(id: string): Observable<OrderItem[]> {
    const url = `${this.baseUrl}/product?id=${id}`;
    return this.http.get<OrderItem[]>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  update(orderItem: OrderItem): Observable<OrderItem> {
    const url = `${this.baseUrl}/${orderItem.id}`;
    return this.http.put<OrderItem>(url, orderItem).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  delete(orderItem: OrderItem): Observable<OrderItem> {
    const url = `${this.baseUrl}/${orderItem.id}`;
    return this.http.delete<OrderItem>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  showMessage(msg: string, title: string, type: string): void {
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

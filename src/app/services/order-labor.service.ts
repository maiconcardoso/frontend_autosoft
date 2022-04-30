import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { OrderLabor } from '../model/order-labor.model';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderLaborService {

  baseUrl = `${environment.URL_API}/v1/order-labors`;

  constructor(private http: HttpClient, 
    private toastr: ToastrService,
    private router: Router) { }

  create(orderLabor: OrderLabor, id_order: string): Observable<OrderLabor> {
    const url = `${this.baseUrl}?order=${id_order}`;
    return this.http.post<OrderLabor>(url, orderLabor).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readAll(): Observable<OrderLabor[]> {
    return this.http.get<OrderLabor[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readById(id: string): Observable<OrderLabor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<OrderLabor>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readByIdLabor(id: string): Observable<OrderLabor[]> {
    const url = `${this.baseUrl}/labor?id=${id}`;
    return this.http.get<OrderLabor[]>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  update(orderLabor: OrderLabor): Observable<OrderLabor> {
    const url = `${this.baseUrl}/${orderLabor.id}`;
    return this.http.put<OrderLabor>(url, orderLabor).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  delete(orderLabor: OrderLabor): Observable<OrderLabor> {
    const url = `${this.baseUrl}/${orderLabor.id}`;
    return this.http.delete<OrderLabor>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  showMessage(msg: string, title: string, type: string): void {
    this.toastr.show(msg, title, {
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

import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = `${environment.URL_API}/v1/customers`;

  constructor(private http: HttpClient, 
    private toastr: ToastrService,
    private router: Router) { }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, customer).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readAll(): Observable<Customer[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Customer[]>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readPageable(): Observable<ResponsePageable> {
    const url = `${this.baseUrl}/page`;
    return this.http.get<ResponsePageable>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readById(id: string): Observable<Customer> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Customer>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  update(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer).pipe(
      map(nowReturn => nowReturn),
      catchError(error => this.showError(error))
    );
  }

  delete(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/${customer.id}`;
    return this.http.delete<Customer>(url).pipe(
      map(response => response),
      catchError((error) => this.showError(error)),
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

  readByNameCustomer(name: string) {
    const url = `${this.baseUrl}/find?name=${name}`;
    return this.http.get<Customer[]>(url).pipe(
      map(dadosOfApi => {return dadosOfApi.map(a => {
        return {name: a.name}
      })})
    );
  }
}

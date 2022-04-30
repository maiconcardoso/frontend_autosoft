import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Provider } from '../model/provider.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  baseUrl: string = `${environment.URL_API}/v1/providers`;

  constructor(private http: HttpClient, 
    private toastr: ToastrService,
    private router: Router) { }

  create(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.baseUrl, provider).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readAll(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readPageable(): Observable<ResponsePageable> {
    const url = `${this.baseUrl}/page`;
    return this.http.get<ResponsePageable>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  readById(id: string): Observable<Provider> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Provider>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  update(provider: Provider): Observable<Provider> {
    const url = `${this.baseUrl}/${provider.id}`;
    return this.http.put<Provider>(url, provider).pipe(
      map(response => response),
      catchError(error => this.showError(error)),
    );
  }

  delete(provider: Provider): Observable<Provider> {
    const url = `${this.baseUrl}/${provider.id}`;
    return this.http.delete<Provider>(url).pipe(
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

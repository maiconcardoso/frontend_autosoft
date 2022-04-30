import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Labor } from '../model/labor.model';

@Injectable({
  providedIn: 'root'
})
export class LaborService {
  
  baseUrl: string = `${environment.URL_API}/v1/labors`

  constructor(private http: HttpClient, 
    private toast: ToastrService,
    private router: Router) { }

  create(labor: Labor): Observable<Labor> {
    return this.http.post<Labor>(this.baseUrl, labor).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readAll(): Observable<Labor[]> {
    return this.http.get<Labor[]>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  readById(id: string): Observable<Labor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Labor>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  update(labor: Labor): Observable<Labor> {
    const url = `${this.baseUrl}/${labor.id}`;
    return this.http.put<Labor>(url, labor).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  delete(labor: Labor): Observable<Labor> {
    const url = `${this.baseUrl}/${labor.id}`;
    return this.http.delete<Labor>(url).pipe(
      map(response => response),
      catchError(error => this.showError(error))
    );
  }

  showMessage(title: string, msg: string, type: string): void {
    this.toast.show(msg, title, {
      closeButton: true,
      progressBar: true
    }, type)
  }

  showError(e: any): Observable<any> {
    this.showMessage('Erro', 'O sistema não pode executar essa operação', 'toast-error');
    this.router.navigate(['notfound']);
    return EMPTY;
  } 

}



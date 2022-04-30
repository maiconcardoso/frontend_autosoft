import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { isObservable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = `${environment.URL_API}`;

  private authenticated: boolean;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) { }


  doLogin(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'basic' + btoa(username + ":" + password) })
    return this.http.get(`${this.baseUrl}/v1/auth/users`, {headers, responseType: 'text' as 'json'});
  }

  getUsers() {
    let username = "dosocon";
    let password = "senha";
    const headers = new HttpHeaders({ Authorization: 'basic' + btoa(username + ":" + password) })
    this.http.get(`${this.baseUrl}/v1/auth/users`, {headers})
  }


  // doLogin(user: User) {
  //   this.http.post<Observable<boolean>>(this.baseUrl, user).subscribe(isValid => {
  //     if (isValid) {
  //       sessionStorage.setItem(
  //         'token',
  //         btoa(user.username + ':' + user.password),
  //       );
  //       this.authenticated = true;
  //       this.showMenuEmitter.emit(true);
  //       this.router.navigate(['/']);
  //     } else {
  //       this.authenticated = false;
  //       this.showMenuEmitter.emit(false);
  //     }
  //   });
  // }


  // doLogin(user: User) {
  //   if (user.username === 'maiconcardoso' && user.password === '123') {
  //     this.authenticated = true;
  //     this.showMenuEmitter.emit(true);
  //     this.router.navigate(['/']);
  //   } else {
  //     this.authenticated = false;
  //     this.showMenuEmitter.emit(false);
  //   }
  // }

  userIsAuthenticated() {
    return this.authenticated;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:3002/api/register';
  private loginUrl = 'http://localhost:3002/api/login';

  constructor(private http: HttpClient, private router: Router) {}
  // : Observable<User>
  registerUser(user: User) {
    return this.http.post<User>(this.registerUrl, user);
  }

  loginUser(user: User) {
    return this.http.post<User>(this.loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    this.router.navigate(['/']);
    return localStorage.removeItem('token');
  }
}

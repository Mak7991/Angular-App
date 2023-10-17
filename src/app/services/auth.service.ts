import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:3002/api/register';
  private loginUrl = 'http://localhost:3002/api/login';

  constructor(private http: HttpClient, private router: Router) {
  }
  // : Observable<User>
  registerUser(user: User) {
    return this.http.post<User>(`${environment.NODE_API_URL}/api/register`, user);
  }

  loginUser(user: User) {
    return this.http.post<User>(`${environment.NODE_API_URL}api/login`, user);
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

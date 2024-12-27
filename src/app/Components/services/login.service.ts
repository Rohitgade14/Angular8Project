import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/api/user';  // Your backend login API URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.loginUrl, body, { headers });
  }

  // After successful login, store the token
  loginSuccess(response: any): void {
    this.authService.setToken(response.token);  // Assuming response contains the token
  }
}

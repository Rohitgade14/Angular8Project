import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('auth_token'));  // Stores the token
  token$ = this.tokenSubject.asObservable();  // Exposes token as observable for reactive usage

  // Save token after successful login
  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
    this.tokenSubject.next(token);  // Emit the token via BehaviorSubject
  }

  // Clear token when logging out
  clearToken(): void {
    localStorage.removeItem('auth_token');
    this.tokenSubject.next(null);  // Reset token in BehaviorSubject
  }

  // Get the token (used in the Interceptor)
  getToken(): string | null {
    return this.tokenSubject.value;  // Directly return the latest token value
  }
}

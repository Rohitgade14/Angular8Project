import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepting HTTP request in LoginInterceptorService...');
    const loginToken = localStorage.getItem('login_token');
    if (loginToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${loginToken}`  // Add the token as Bearer authorization
        }
      });
    } else {
      console.log('No login token found in localStorage');
    }

    // Proceed with the modified request
    return next.handle(req);
  }
  }


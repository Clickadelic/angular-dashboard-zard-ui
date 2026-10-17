import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.tobias-hopp.de/api';
  
  // Register method
  // Takes user credentials and returns an observable for the register request
  register(credentials: { name: string; email: string; password: string, password_confirmation: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, credentials);
  }
}
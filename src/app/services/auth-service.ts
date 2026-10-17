import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.tobias-hopp.de/api'; // Deine API-Basis-URL

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
  logout(): Observable<any> {
    const token = localStorage.getItem('auth_token');

    // Header mit dem Bearer-Token zusammenstellen
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      tap(() => {
        // Token lokal im Browser löschen
        localStorage.removeItem('auth_token');
      })
    );
  }
}
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.tobias-hopp.de/api'; // Deine API-Basis-URL
  
  // Prüft, ob ein Token vorhanden ist
  isLoggedIn(): boolean {
	return !!localStorage.getItem('auth_token');
  }
  // Login method
  // Takes user credentials and returns an observable for the login request
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  // Logout method
  // Takes no parameters and returns an observable for the logout request
  logout(): Observable<any> {
    const token = localStorage.getItem('auth_token');
	console.log(token);
    // Header mit dem Bearer-Token zusammenstellen
    const headers = new HttpHeaders({
		'Authorization': `Bearer ${token}`
    });
	
    return this.http.post(`${this.apiUrl}/auth/logout`, {}, { headers }).pipe(
      tap(() => {
        // Token lokal im Browser löschen
        localStorage.removeItem('auth_token');
      }),
	  catchError((error) => {
		console.error('Logout failed:', error);
		// Handle the error here, e.g. display an error message to the user
		return throwError(error);
	  })
    );
  }
}
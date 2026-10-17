import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLayoutService {
  // Ein Signal für den Untertitel mit einem Standardwert
  subtitle = signal<string>('Anmeldung');
}
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service'; // Passe den Pfad an

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Wenn der User eingeloggt ist, erlaube den Zugriff
  if (authService.isLoggedIn()) {
    return true;
  }

  // Andernfalls ab zur Login-Seite umleiten
  router.navigate(['/auth/login']);
  return false;
};
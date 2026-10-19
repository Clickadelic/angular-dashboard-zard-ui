import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Wichtig für ngModel
import { Router } from '@angular/router';
import { AuthService } from '@/services/auth-service';
import { AuthLayoutService } from '@/services/auth-layout-service';
import { ZardButtonComponent } from '@/shared/components/button/button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ZardButtonComponent],
  templateUrl: './login-form.html',
})
export class LoginForm {
  private authService = inject(AuthService);
  private router = inject(Router);
  private layoutService = inject(AuthLayoutService);

  // Model for inputs
  credentials = {
    email: '',
    password: '',
  };

  constructor() {
    this.layoutService.subtitle.set('Anmeldung');
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login erfolgreich!', response);

        // Wenn Laravel einen Token zurückgibt (z.B. response.token):
        localStorage.setItem('auth_token', response.token);

        // Weiterleiten nach dem Login (z.B. zum Dashboard)
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Login fehlgeschlagen', err);
        // Zeige dem User eine Fehlermeldung
      },
    });
  }
}

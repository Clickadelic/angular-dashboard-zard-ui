import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register-service';
import { ZardButtonComponent } from '@/shared/components/button/button.component';
@Component({
  selector: 'app-register-form',
  imports: [FormsModule, ZardButtonComponent],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  constructor(
    private registerService: RegisterService,
    private router: Router,
  ) {}

  onSubmit() {
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);
    const credentials = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      password_confirmation: formData.get('password_repeat') as string,
    };

    this.registerService.register(credentials).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: (err) => console.error(err),
    });
  }
}

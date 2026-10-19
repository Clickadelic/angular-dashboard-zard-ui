import { Component, inject, OnInit } from '@angular/core';
import { RegisterForm } from '@/components/forms/register-form/register-form';
import { AuthLayoutService } from '@/services/auth-layout-service';

@Component({
  selector: 'app-register-page',
  imports: [RegisterForm],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage implements OnInit {
  private authService = inject(AuthLayoutService);

  ngOnInit() {
    this.authService.subtitle.set('Registrierung');
  }
}

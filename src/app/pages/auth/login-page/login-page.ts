import { Component, inject, OnInit } from '@angular/core';
import { LoginForm } from '@/components/forms/login-form/login-form';

import { AuthLayoutService } from '@/services/auth-layout-service';
@Component({
  selector: 'app-login-page',
  imports: [LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {
  private authService = inject(AuthLayoutService);

  ngOnInit() {
    this.authService.subtitle.set('Anmeldung');
  }
}

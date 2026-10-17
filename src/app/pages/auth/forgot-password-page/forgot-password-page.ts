import { Component } from '@angular/core';
import { PasswordRecoveryForm } from '../../../components/forms/password-recovery-form/password-recovery-form';

@Component({
  selector: 'app-forgot-password-page',
  imports: [PasswordRecoveryForm],
  templateUrl: './forgot-password-page.html',
  styleUrl: './forgot-password-page.css',
})
export class ForgotPasswordPage {}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactForm {
  private readonly http = inject(HttpClient);

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    subject: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
  });

  submitting = false;
  successMessage = '';
  errorMessage = '';

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    this.http
      .post('https://api.tobias-hopp.de/api/v1/contact-submissions', this.form.getRawValue())
      .subscribe({
        next: () => {
          this.successMessage = 'Deine Nachricht wurde erfolgreich versendet.';
          this.form.reset();
          this.submitting = false;
        },
        error: () => {
          this.errorMessage =
            'Deine Nachricht konnte nicht versendet werden. Bitte versuche es erneut.';
          this.submitting = false;
        },
      });
  }
}

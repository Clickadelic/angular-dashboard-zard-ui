import { Component } from '@angular/core';
import { ContactForm } from '@/forms/contact-form/contact-form';
@Component({
  selector: 'app-contact-form-page',
  imports: [ContactForm],
  templateUrl: './contact-form-page.html',
  styleUrl: './contact-form-page.css',
})
export class ContactFormPage {}

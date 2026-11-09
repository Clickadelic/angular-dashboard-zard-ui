import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutService } from '@/services/auth-layout-service';
import { BackgroundImageComponent } from '@/shared/components/background-image/background-image.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, BackgroundImageComponent],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {
  constructor(public authLayoutService: AuthLayoutService) {}
}

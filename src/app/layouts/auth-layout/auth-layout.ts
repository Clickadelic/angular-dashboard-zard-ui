import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutService } from '@/services/auth-layout-service';
import { BackgroundImage } from '@/shared/components/background-image/background-image';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, BackgroundImage],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {
  constructor(public authLayoutService: AuthLayoutService) {}
}

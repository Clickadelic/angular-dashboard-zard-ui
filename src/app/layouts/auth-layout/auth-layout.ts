import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutService } from '../../services/auth-layout-service';
@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
})
export class AuthLayout {
	constructor(public authLayoutService: AuthLayoutService) {}
}

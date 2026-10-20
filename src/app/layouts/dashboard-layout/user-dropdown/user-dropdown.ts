import { Component, inject, signal } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardDropdownImports } from '@/shared/components/dropdown/dropdown.imports';
import { AuthService } from '@/services/auth-service';

/**
 * @return UserDropdown component instance.
 */
@Component({
  selector: 'app-user-dropdown',
  imports: [ZardButtonComponent, ZardDropdownImports],
  templateUrl: './user-dropdown.html',
  styleUrl: './user-dropdown.css',
  providers: [AuthService],
})
export class UserDropdown {
	private authService = inject(AuthService);
	private router = inject(Router);

	currentUser = signal({ 
		name: localStorage.getItem('user_name') || 'Benutzer' 
	});

	log(item: string) {
    console.log(`${item} clicked`);
  }
}

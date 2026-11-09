import { Component } from '@angular/core';

import { ZardCardImports } from '@/shared/components/card/card.imports';
import { UserCard } from '@/features/user-card/user-card';
import { ZardCardComponent } from '@/shared/components/card/card.component';

// User Data
import type { User } from '@/types';
import users from '@/data/users.json';

@Component({
  selector: 'app-customers-page',
  imports: [ZardCardImports, ZardCardComponent, UserCard],
  templateUrl: './customers-page.html',
  styleUrl: './customers-page.css',
})
export class CustomersPage {
  readonly users: User[] = users;
}

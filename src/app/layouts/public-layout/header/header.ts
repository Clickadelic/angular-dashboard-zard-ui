import { Component } from '@angular/core';
import { LucideMoveRight, LucideSearch, LucideLogIn } from '@lucide/angular';

@Component({
  selector: 'app-header',
  imports: [LucideMoveRight, LucideSearch, LucideLogIn],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}

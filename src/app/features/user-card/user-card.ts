import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import type { User } from '@/types';

@Component({
  imports: [NgOptimizedImage, ZardCardImports],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  user = input.required<User>();
}

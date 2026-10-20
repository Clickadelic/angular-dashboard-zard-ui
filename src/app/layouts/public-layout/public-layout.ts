import { Component } from '@angular/core';
import { LucideMoveRight } from '@lucide/angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [LucideMoveRight, RouterOutlet],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {}

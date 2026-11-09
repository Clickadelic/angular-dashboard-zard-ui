import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@/layouts/public-layout/footer/footer';
import { Header } from '@/layouts/public-layout/header/header';
@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {}

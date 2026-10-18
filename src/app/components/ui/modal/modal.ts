import { Component, model } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  isOpen = model<boolean>(false);

  close() {
    this.isOpen.set(false);
  }
}
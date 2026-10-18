import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { LucideChevronDown, LucideUser } from '@lucide/angular';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [LucideChevronDown, LucideUser],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown {
  // Input Signal für den Benutzernamen
  userName = input<string>('');

  isOpen = signal(false);
  private elementRef = inject(ElementRef);

  toggle() {
    this.isOpen.update((v) => !v);
  }

  close() {
    this.isOpen.set(false);
  }

  // Schließt das Menü automatisch bei Klick außerhalb
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }
}

// Hilfskomponente für Menü-Items
@Component({
  selector: 'app-dropdown-item',
  standalone: true,
  template: `
    <button
      type="button"
      class="flex w-full cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <ng-content />
    </button>
  `,
})
export class DropdownItem {}

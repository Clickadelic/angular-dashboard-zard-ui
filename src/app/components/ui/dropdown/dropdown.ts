import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { LucideChevronDown } from '@lucide/angular';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  template: `
    <div class="relative inline-block text-left">
      <!-- Trigger (z.B. Button oder Profil-Avatar) -->
      <div (click)="toggle()">
        <ng-content select="[dropdown-trigger]" />
		<svg lucideChevronDown class="size-4 mt-1"></svg>
      </div>

      <!-- Dropdown Content (Menü) -->
      @if (isOpen()) {
        <div
          class="absolute right-0 z-50 mt-2 min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80"
        >
          <ng-content select="[dropdown-content]" />
        </div>
      }
    </div>
  `,
})
export class Dropdown {
  isOpen = signal(false);
  private elementRef = inject(ElementRef);

  toggle() {
    this.isOpen.update((v) => !v);
  }

  close() {
    this.isOpen.set(false);
  }

  // Schließt das Menü automatisch, wenn man außerhalb klickt
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }
}

// Kleine Hilfskomponente für Menü-Items
@Component({
  selector: 'app-dropdown-item',
  standalone: true,
  template: `
    <button
      type="button"
      class="flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <ng-content />
    </button>
  `,
})
export class DropdownItem {}
import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { LucideChevronDown } from '@lucide/angular';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [LucideChevronDown],
  template: `
    <div class="relative inline-block text-left">
      <!-- Semantischer Button-Trigger -->
      <button
        type="button"
        (click)="toggle()"
        class="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        [attr.aria-expanded]="isOpen()"
      >
        <!-- Optionaler Benutzername via Signal Input -->
        @if (userName()) {
          <span>{{ userName() }}</span>
        }
        
        <!-- Zusätzlicher individueller Trigger-Inhalt falls benötigt -->
        <ng-content select="[dropdown-trigger]" />

        <!-- Chevron Icon -->
        <svg lucideChevronDown class="size-4 transition-transform duration-200" [class.rotate-180]="isOpen()" />
      </button>

      <!-- Dropdown Content (Menü) -->
      @if (isOpen()) {
        <div
          class="absolute right-0 z-50 mt-2 min-w-48 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80"
        >
          <ng-content select="[dropdown-content]" />
        </div>
      }
    </div>
  `,
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
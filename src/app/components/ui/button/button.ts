import { Component, Input } from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Hilfsfunktion zum Zusammenführen von Tailwind-Klassen
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 1. CVA-Definition (analog zu shadcn)
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

// Typen für die Inputs ableiten
type ButtonVariants = VariantProps<typeof buttonVariants>;

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button [class]="computedClasses">
      <ng-content />
    </button>
  `,
})
export class Button {
  // Inputs für Variante und Größe
  @Input() variant: ButtonVariants['variant'] = 'default';
  @Input() size: ButtonVariants['size'] = 'default';
  // Zusätzliche Klassen von außen erlauben (wie className in React)
  @Input() class: string = '';

  // Berechnet die finalen CSS-Klassen basierend auf den Inputs
  get computedClasses(): string {
    return cn(buttonVariants({ variant: this.variant, size: this.size }), this.class);
  }
}

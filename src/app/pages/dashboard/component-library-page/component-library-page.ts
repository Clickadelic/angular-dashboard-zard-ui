import { Component } from '@angular/core';
import { Button } from '../../../components/ui/button/button';
import { AccordionItem } from '../../../components/ui/accordion/accordion-item';
import { AccordionTrigger } from '../../../components/ui/accordion/accordion-trigger';
import { AccordionContent } from '../../../components/ui/accordion/accordion-content';
import { LucideFileText, LucideMoveRight } from '@lucide/angular';

@Component({
  selector: 'app-component-library-page',
  imports: [
    Button,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    LucideFileText,
    LucideMoveRight,
  ],
  templateUrl: './component-library-page.html',
  styleUrl: './component-library-page.css',
})
export class ComponentLibraryPage {}

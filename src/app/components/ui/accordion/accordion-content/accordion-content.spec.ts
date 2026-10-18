import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AccordionContent } from './accordion-content';
import { AccordionItem } from '../accordion-item/accordion-item';

describe('AccordionContent', () => {
  let component: AccordionContent;
  let fixture: ComponentFixture<AccordionContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionContent],
      providers: [
        // Wir stellen dem Test ein einfaches Mock-AccordionItem zur Verfügung
        { provide: AccordionItem, useValue: { isOpen: () => false } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

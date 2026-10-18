import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionItem } from '../accordion-item/accordion-item';
import { AccordionTrigger } from './accordion-trigger';

describe('AccordionTrigger', () => {
  let component: AccordionTrigger;
  let fixture: ComponentFixture<AccordionTrigger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionTrigger],
      providers: [
        // Mock mit den Methoden/Signalen, die der Trigger vom Item erwartet
        { provide: AccordionItem, useValue: { toggle: () => {}, isOpen: () => false } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionTrigger);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BreadcrumbLink } from './breadcrumb-link';

describe('BreadcrumbLink', () => {
  let component: BreadcrumbLink;
  let fixture: ComponentFixture<BreadcrumbLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbLink],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BreadcrumbLink);

    // Hier übergeben wir den erforderlichen Input-Wert für den Test:
    fixture.componentRef.setInput('link', '/dashboard');
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

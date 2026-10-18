import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderSidebar } from './header-sidebar';

describe('HeaderSidebar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSidebar],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeaderSidebar);

    // Hier den required Input-Wert für den Test setzen:
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

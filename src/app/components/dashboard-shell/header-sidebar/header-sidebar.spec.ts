import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderSidebar } from './header-sidebar';

describe('HeaderSidebar', () => {
  let component: HeaderSidebar;
  let fixture: ComponentFixture<HeaderSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSidebar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
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

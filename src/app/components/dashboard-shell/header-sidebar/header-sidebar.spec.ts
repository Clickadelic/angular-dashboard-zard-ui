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
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSidebar } from './header-sidebar';

describe('HeaderSidebar', () => {
  let component: HeaderSidebar;
  let fixture: ComponentFixture<HeaderSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibraryPage } from './component-library-page';

describe('ComponentLibraryPage', () => {
  let component: ComponentLibraryPage;
  let fixture: ComponentFixture<ComponentLibraryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLibraryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentLibraryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSubmissionsPage } from './contact-submissions-page';

describe('ContactSubmissionsPage', () => {
  let component: ContactSubmissionsPage;
  let fixture: ComponentFixture<ContactSubmissionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSubmissionsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSubmissionsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

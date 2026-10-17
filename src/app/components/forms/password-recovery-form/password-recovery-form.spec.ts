import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryForm } from './password-recovery-form';

describe('PasswordRecoveryForm', () => {
  let component: PasswordRecoveryForm;
  let fixture: ComponentFixture<PasswordRecoveryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordRecoveryForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordRecoveryForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

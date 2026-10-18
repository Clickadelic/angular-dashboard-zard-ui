import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbContainer } from './breadcrumb-container';

describe('BreadcrumbContainer', () => {
  let component: BreadcrumbContainer;
  let fixture: ComponentFixture<BreadcrumbContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

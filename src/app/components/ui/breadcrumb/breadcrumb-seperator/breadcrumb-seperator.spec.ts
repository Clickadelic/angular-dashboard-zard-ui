import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbSeperator } from './breadcrumb-seperator';

describe('BreadcrumbSeperator', () => {
  let component: BreadcrumbSeperator;
  let fixture: ComponentFixture<BreadcrumbSeperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbSeperator],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbSeperator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveChartComponent } from './wave-chart';

describe('WaveChart', () => {
  let component: WaveChartComponent;
  let fixture: ComponentFixture<WaveChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WaveChartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

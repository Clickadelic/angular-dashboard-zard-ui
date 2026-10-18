import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartComponent } from '../../../components/charts/bar-chart/bar-chart';
import { WaveChartComponent } from '../../../components/charts/wave-chart/wave-chart';
import { DashboardPage } from './dashboard-page';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage, BarChartComponent, WaveChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

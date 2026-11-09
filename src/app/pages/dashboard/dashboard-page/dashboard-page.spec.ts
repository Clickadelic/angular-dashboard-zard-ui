import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarChartComponent } from '../../../shared/components/charts/bar-chart/bar-chart';
import { WaveChartComponent } from '../../../shared/components/charts/wave-chart/wave-chart';
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
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card for each user in the JSON data', () => {
    const cards: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('app-user-card');
    expect(cards.length).toBe(component.users.length);
    expect(new Set(component.users.map((user) => user.id)).size).toBe(component.users.length);

    component.users.forEach((user, index) => {
      expect(cards[index].textContent).toContain(user.name);
      expect(cards[index].textContent).toContain(user.email);
      expect(cards[index].textContent).toContain(user.role);
    });
  });
});

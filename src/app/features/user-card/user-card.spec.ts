import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCard } from './user-card';

describe('UserCard', () => {
  let component: UserCard;
  let fixture: ComponentFixture<UserCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('user', {
      id: '7e1dacdf-f47f-4001-ab82-f9fb5a696501',
      name: 'Max',
      age: 30,
      gender: 'male',
      email: 'max@example.com',
      role: 'Administrator',
      avatar: '/assets/images/andre-jackson-ai3yjWvJ-ds-unsplash.jpg',
    });
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user details', () => {
    expect(fixture.nativeElement.textContent).toContain('Max');
    expect(fixture.nativeElement.textContent).toContain('max@example.com');
    expect(fixture.nativeElement.textContent).toContain('Administrator');
    expect(fixture.nativeElement.textContent).toContain('Alter: 30');
    expect(fixture.nativeElement.textContent).toContain('Geschlecht: male');

    const image: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(image.getAttribute('src')).toBe('/assets/images/andre-jackson-ai3yjWvJ-ds-unsplash.jpg');
    expect(image.alt).toBe('Max');
  });

  it('should show an initial when the user has no avatar', () => {
    fixture.componentRef.setInput('user', {
      id: 'another-user',
      name: 'Barbara',
      age: 42,
      gender: 'female',
      email: 'barbara@example.com',
      role: 'CFO',
      avatar: null,
    });
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('img')).toBeNull();
    expect(fixture.nativeElement.querySelector('[aria-hidden="true"]').textContent.trim()).toBe('B');
    expect(fixture.nativeElement.textContent).toContain('Barbara');
  });
});

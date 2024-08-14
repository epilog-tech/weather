import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { WeatherListComponent } from './weather-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherListComponent, RouterTestingModule], // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a weather list defined', () => {
    expect(component.weatherList).toBeDefined();
    expect(component.weatherList.length).toBeGreaterThan(0);
  });

  it('should navigate to weather page when navigateToWeather is called', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    await component.navigateToWeather('tunis');
    expect(navigateSpy).toHaveBeenCalledWith(['/weather'], { queryParams: { code: 'tunis' } });
  });
});

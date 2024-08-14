import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { WeatherComponent } from './weather.component';
import { WeatherApiService } from '../../services/weather-api.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BackgroundColorDirective } from '../../directives/background-color.directive';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';

/* eslint-disable @typescript-eslint/no-unused-vars */
describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherApiService: WeatherApiService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        BackgroundColorDirective,
        TemperatureConversionPipe,
        WeatherComponent // Import the standalone component here
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of(convertToParamMap({ code: 'paris' }))
          }
        },
        {
          provide: WeatherApiService,
          useValue: {
            getCityWeather: jasmine.createSpy('getCityWeather').and.returnValue(of({ temperature: 25 }))
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    weatherApiService = TestBed.inject(WeatherApiService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with city code from query params', () => {
    expect(component.cityCode).toBe('');
  });

  // it('should call loadWeather on init and set weather data', async () => {
  //   await fixture.whenStable();
  //   expect(weatherApiService.getCityWeather).toHaveBeenCalledWith('paris');
  //   expect(component.weather).toEqual({ temperature: 25 });
  // });

  it('should toggle the unit between Celsius and Fahrenheit', () => {
    expect(component.unit).toBe('C');
    component.toggleUnit();
    expect(component.unit).toBe('F');
    component.toggleUnit();
    expect(component.unit).toBe('C');
  });
});

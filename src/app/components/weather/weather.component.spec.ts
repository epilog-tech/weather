import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { WeatherComponent } from './weather.component';
import { BackgroundColorDirective } from '../../directives/background-color.directive';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';
import { CommonModule } from '@angular/common';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WeatherComponent,
        BackgroundColorDirective,
        TemperatureConversionPipe,
        CommonModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ code: 'tunis' }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the cityCode based on queryParams', () => {
    expect(component.cityCode).toBe('tunis');
  });

  it('should set the correct temperature based on cityCode', () => {
    expect(component.temperature).toBe(35);
  });

  it('should toggle the unit between Celsius and Fahrenheit', () => {
    expect(component.unit).toBe('C');
    component.toggleUnit();
    expect(component.unit).toBe('F');
    component.toggleUnit();
    expect(component.unit).toBe('C');
  });
});

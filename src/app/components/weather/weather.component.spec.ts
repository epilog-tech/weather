import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      queryParams: of({ code: 'tunis' }), // Default mock for the route parameter
    };

    await TestBed.configureTestingModule({
      imports: [WeatherComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
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

  it('should set default temperature based on cityCode', () => {
    expect(component.cityCode).toBe('tunis');
    expect(component.temperature).toBe(35); // Default case for 'tunis'
  });

  it('should update temperature based on query parameter', () => {
    mockActivatedRoute.queryParams = of({ code: 'london' });
    component.ngOnInit();
    expect(component.cityCode).toBe('london');
    expect(component.temperature).toBe(12); // Temperature for 'london'
  });

  it('should handle unknown city codes with a default temperature', () => {
    mockActivatedRoute.queryParams = of({ code: 'unknown' });
    component.ngOnInit();
    expect(component.cityCode).toBe('unknown');
    expect(component.temperature).toBe(0); // Default temperature
  });

  it('should apply correct temperature when cityCode is moscow', () => {
    mockActivatedRoute.queryParams = of({ code: 'moscow' });
    component.ngOnInit();
    expect(component.cityCode).toBe('moscow');
    expect(component.temperature).toBe(-5); // Temperature for 'moscow'
  });
});

import { TestBed } from '@angular/core/testing';
import { WeatherApiService } from './weather-api.service';

describe('WeatherApiService', () => {
  let service: WeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of cities', async () => {
    const cities = await service.getCities();
    expect(cities).toBeTruthy();
    expect(cities.length).toBeGreaterThan(0);
  });

  it('should return weather for a valid city code', async () => {
    const weather = await service.getCityWeather('paris');
    expect(weather).toBeTruthy();
    expect(weather.temperature).toEqual(26);
  });

  // it('should return undefined for an invalid city code', async () => {
  //   const weather = await service.getCityWeather('invalid');
  //   expect(weather).toBeUndefined();
  // });
});

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private cities: any[] = [
    { name: 'Tunis', code: 'tunis', weather: { temperature: 39 } },
    { name: 'Paris', code: 'paris', weather: { temperature: 26 } },
    { name: 'Barcelone', code: 'barcelone', weather: { temperature: 32 } },
    { name: 'London', code: 'london', weather: { temperature: 10 } },
    { name: 'New York', code: 'new york', weather: { temperature: 27 } },
    { name: 'Moscow', code: 'moscow', weather: { temperature: -5 } },
    { name: 'Quebec', code: 'quebec', weather: { temperature: 2 } },
  ];
  async getCities() : Promise<any[]>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    return this.cities;
  }
  async getCityWeather(cityCode:string): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const city = this.cities.find((x) => x.code === cityCode);
    return city.weather;
  }
  constructor() { }
}

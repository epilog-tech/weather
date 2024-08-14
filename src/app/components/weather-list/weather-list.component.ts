import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent implements OnInit {
  weatherList: any[] = [
  ];
  constructor(private router: Router, private weatherApiService: WeatherApiService) {}
  ngOnInit():  void {
    this.loadCities().catch(error => {
      console.error('Failed to load cities:', error);
    });
  }
  private async loadCities() : Promise<void>{
    this.weatherList = await this.weatherApiService.getCities();
  }
  async navigateToWeather(code: string): Promise<void> {
    await this.router.navigate(['/weather'], { queryParams: { code: code } });
  }
}

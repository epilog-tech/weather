import { Component, OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../../directives/background-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';
import { CommonModule } from '@angular/common';
import { WeatherApiService } from '../../services/weather-api.service';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [BackgroundColorDirective, TemperatureConversionPipe, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  cityCode: string = '';
  weather: any;
  unit: string = 'C';
  constructor(
    private route: ActivatedRoute,
    private weatherApiService: WeatherApiService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const cityCodeParam = params['code'];
      if (cityCodeParam) {
        this.cityCode = cityCodeParam;

        this.loadWeather(this.cityCode).catch((error) => {
          console.error('Failed to load weather:', error);
        });
      }
    });
  }
  private async loadWeather(code: string): Promise<void> {
    this.weather = await this.weatherApiService.getCityWeather(code);
  }
  toggleUnit() {
    this.unit = this.unit === 'C' ? 'F' : 'C';
  }
}

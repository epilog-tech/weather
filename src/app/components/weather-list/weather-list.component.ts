import { Component } from '@angular/core';
import { Router } from '@angular/router';
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css',
})
export class WeatherListComponent {
  weatherList: any[] = [
    { name: 'Tunis', code: 'tunis' },
    { name: 'Paris', code: 'paris' },
    { name: 'Barcelone', code: 'barcelone' },
    { name: 'London', code: 'london' },
    { name: 'New York', code: 'new york' },
    { name: 'Moscow', code: 'moscow' },
  ];
  constructor(private router: Router) {}
  async navigateToWeather(code: string): Promise<void> {
    await this.router.navigate(['/weather'], { queryParams: { code: code } });
  }
}

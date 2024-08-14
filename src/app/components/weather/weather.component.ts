import { Component, OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../../directives/background-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion.pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [BackgroundColorDirective, TemperatureConversionPipe, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  cityCode: string = '';
  temperature: number = 0;
  unit: string = 'C';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const cityCodeParam = params['code'];
      if (cityCodeParam) {
        this.cityCode = cityCodeParam;
      }
      if (this.cityCode === 'tunis') {
        this.temperature = 35;
      }
      else if (this.cityCode === 'paris') {
        this.temperature = 25;
      }
      else if (this.cityCode === 'barcelone') {
        this.temperature = 32;
      }
      else if (this.cityCode === 'london') {
        this.temperature = 12;
      }
      else if (this.cityCode === 'new york') {
        this.temperature = 26;
      }
      else if (this.cityCode === 'moscow') {
        this.temperature = -5;
      }
      else {
        this.temperature = 0;
      }
    });
  }
  toggleUnit()
  {
    this.unit = this.unit === 'C' ? 'F' : 'C';
  }
}

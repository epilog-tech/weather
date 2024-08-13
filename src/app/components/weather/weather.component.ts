import { Component } from '@angular/core';
import { BackgroundColorDirective } from '../../directives/background-color.directive';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    BackgroundColorDirective
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  temperature:number =15;
}

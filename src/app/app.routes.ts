import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';

export const routes: Routes = [
    { path: '/weather/',redirectTo:'/weather/weather', pathMatch:'full' },
    { path: '/weather/weather', component:WeatherComponent, title: 'weather' },
    { path: '/weather/weather-list', component:WeatherListComponent, title: 'weather-list' }
];

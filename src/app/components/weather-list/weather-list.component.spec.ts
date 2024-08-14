// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
// import { of, throwError } from 'rxjs';
// import { WeatherListComponent } from './weather-list.component';
// import { WeatherApiService } from '../../services/weather-api.service';
// import { RouterTestingModule } from '@angular/router/testing';

// // Mock WeatherApiService
// class MockWeatherApiService {
//   getCities = jasmine.createSpy('getCities').and.returnValue(of([])); // Mock empty array return
// }

// describe('WeatherListComponent', () => {
//   let component: WeatherListComponent;
//   let fixture: ComponentFixture<WeatherListComponent>;
//   let mockWeatherApiService: MockWeatherApiService;
//   let router: Router;

//   beforeEach(async () => {
//     mockWeatherApiService = new MockWeatherApiService();

//     await TestBed.configureTestingModule({
//       imports: [RouterTestingModule], // Import RouterTestingModule to test routing
//       declarations: [WeatherListComponent],
//       providers: [
//         { provide: WeatherApiService, useValue: mockWeatherApiService },
//         {
//           provide: Router,
//           useValue: {
//             navigate: jasmine.createSpy('navigate') // Mock Router's navigate method
//           }
//         }
//       ]
//     }).compileComponents();
//   });

//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(WeatherListComponent);
//   //   component = fixture.componentInstance;
//   //   router = TestBed.inject(Router);
//   //   fixture.detectChanges();
//   // });

//   // it('should create the component', () => {
//   //   expect(component).toBeTruthy();
//   // });
// });

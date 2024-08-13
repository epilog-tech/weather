import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherListComponent } from './weather-list.component';
/* eslint-disable @typescript-eslint/no-unsafe-call */
describe('WeatherListComponent', () => {
  let component: WeatherListComponent;
  let fixture: ComponentFixture<WeatherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
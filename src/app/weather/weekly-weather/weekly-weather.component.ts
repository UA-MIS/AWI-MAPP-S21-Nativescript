
import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../../shared/weather-api.service';
//import { fontStyleProperty } from 'tns-core-modules/ui/page/page';
import { GeolocationService } from '../../shared/geolocation.service';

@Component({
  selector: 'ns-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.css']
})
export class WeeklyWeatherComponent implements OnInit {
  public weeklyWeatherData;
  private currentLocation;

  constructor(private weatherService: WeatherAPIService, private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    // Obtain location data and then use it to fetch current weather
    this.geolocationService.currentLocation.subscribe(loc => {
      this.currentLocation = loc;
      this.getWeeklyWeatherData();
    });
  }

  getWeeklyWeatherData() {
    this.weatherService.getWeeklyWeatherData(
      this.currentLocation.latitude,
      this.currentLocation.longitude
    ).subscribe(
      (data) => this.weeklyWeatherData = data,
      (err) => console.log(err)
    );
  }

  convertKelvinToFahrenheit(temp: number): number {
    return Math.floor((temp - 273.15) * 9/5 + 32);
  }
}


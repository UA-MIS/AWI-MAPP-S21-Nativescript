import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../../shared/weather-api.service';
//import { fontStyleProperty } from 'tns-core-modules/ui/page/page';
import { GeolocationService } from '../../shared/geolocation.service';
import { setCurrentWeather, getCurrentWeather } from '../../shared/cache.service';

@Component({
  selector: 'ns-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  public currentWeatherData;
  private currentLocation;

  constructor(private weatherService: WeatherAPIService, private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    // Obtain location data and then use it to fetch current weather
    this.geolocationService.currentLocation.subscribe(loc => {
      this.currentLocation = loc;
      this.getCurrentWeatherData();
    });
  }

  getCurrentWeatherData() {
    this.weatherService.getCurrentWeatherData(
      this.currentLocation.latitude,
      this.currentLocation.longitude
    ).subscribe(
      (data) => this.currentWeatherData = data,
      (err) => console.log(err)
    );
    // console.log("***DEBUGGING***");
    // console.log("Data type: " + typeof(this.currentWeatherData))
    // console.log("Directly called data: " + this.currentWeatherData);
    // setCurrentWeather(this.currentWeatherData);
    // console.log("Application settings data: " + getCurrentWeather());
    // console.log("***END DEBUGGING***");
  }

  convertKelvinToFahrenheit(temp: number): number {
    return Math.floor((temp - 273.15) * 9/5 + 32);
  }
}

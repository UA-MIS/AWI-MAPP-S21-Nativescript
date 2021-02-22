
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


 convertDatetime(dt: number): string {

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var sec = dt;
    var date = new Date(dt * 1000);
    var day = date.getDay();
    var dayofweek = days[ date.getDay() ];

    return dayofweek;
 }


 displayIcon(icon: String): String{

    var weatherIcon = icon;

    return weatherIcon;
 }

 }

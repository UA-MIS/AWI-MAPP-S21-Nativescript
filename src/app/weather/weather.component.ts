/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../shared/weather-api.service';

@Component({
  selector: 'Weather',
  templateUrl: './weather.component.html',
  providers: [WeatherAPIService]
})
export class WeatherComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  map: google.maps.Map;
  initMap(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }
}

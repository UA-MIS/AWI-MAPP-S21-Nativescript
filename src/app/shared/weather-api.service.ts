import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  private key = "539a46bd4ad297dc8deef20214c22d81";

  constructor(private http: HttpClient) { }


  getCurrentWeatherData(lat: number, lon: number): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}`,
      { headers: headers }
    );
  }

  getWeeklyWeatherData(lat: number, lon: number): Observable<any> {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${this.key}`,
        { headers: headers }
    );
      }
}

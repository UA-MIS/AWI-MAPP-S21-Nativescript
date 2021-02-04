import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { WeatherComponent } from './weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherStatusComponent } from './current-weather/weather-status/weather-status.component';


@NgModule({
  declarations: [WeatherComponent, CurrentWeatherComponent, WeatherStatusComponent],
  imports: [
    WeatherRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WeatherModule { }

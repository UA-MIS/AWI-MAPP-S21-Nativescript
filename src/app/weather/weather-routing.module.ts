import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "@nativescript/angular";

import { WeatherComponent } from './weather.component';

const routes: Routes = [
    { path: "default", component: WeatherComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WeatherRoutingModule { }

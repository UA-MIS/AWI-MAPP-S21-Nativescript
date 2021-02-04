import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(weatherTab:weather/default//safetyTab:safety/default)",
        pathMatch: "full"
    },
    {
        path: "weather",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("src/app/weather/weather.module").then((m) => m.WeatherModule),
        outlet: "weatherTab"
    },
    {
        path: "safety",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("src/app/safety/safety.module").then((m) => m.SafetyModule),
        outlet: "safetyTab"
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

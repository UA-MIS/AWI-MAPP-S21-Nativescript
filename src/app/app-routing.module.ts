import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "@nativescript/angular";


const routes: Routes = [
    {
        path: "",
        redirectTo: "/(weatherTab:weather/default//tidesTab:tides/default//safetyTab:safety/default)",
        pathMatch: "full"
    },
    {
        path: "weather",
        component: NSEmptyOutletComponent,
        //loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
        loadChildren: () => import("../app/weather/weather.module").then(m => m.WeatherModule),
        outlet: "weatherTab"
    },
    /*
    {
        path: "weather",
        component: NSEmptyOutletComponent,

    }
    */
    {
        path: "tides",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("../app/tides/tides.module").then(m => m.TidesModule),
        outlet: "tidesTab"
    },
    {
        path: "tides",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("../app/tides/tides.module").then(m => m.TidesModule),
        outlet: "tidesTab"
    },
    {
        path: "safety",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("../app/safety/safety.module").then(m => m.SafetyModule),
        outlet: "safetyTab"
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

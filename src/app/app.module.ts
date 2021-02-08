import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "@nativescript/angular";
import { isIOS } from "@nativescript/core/platform";

declare var GMSServices: any
declare let myGlobal: any

if (isIOS) { 
    GMSServices.provideAPIKey(myGlobal.googleKey);
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
   
 }

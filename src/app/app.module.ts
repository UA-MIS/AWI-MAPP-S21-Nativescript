import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "@nativescript/angular/http-client";


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
export class AppModule { }

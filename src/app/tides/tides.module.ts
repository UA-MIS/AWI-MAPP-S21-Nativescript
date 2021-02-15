import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from '@nativescript/angular';

import { TidesRoutingModule } from "./tides-routing.module";
import { TidesComponent } from "./tides.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TidesRoutingModule
    ],
    declarations: [
        TidesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TidesModule { }

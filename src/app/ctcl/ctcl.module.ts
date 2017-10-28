/* tslint:disable */
import { NgModule } from '@angular/core';
import {ThemeModule} from "../@theme/theme.module";
import {CtclComponent} from "./ctcl.component";
import {HomeModule} from "./homepage/home.module";
import {CtclRoutingModule} from "./ctcl-routing.module";

const CTCL_COMPONENTS = [
  CtclComponent,
];
@NgModule({
  imports: [
    CtclRoutingModule,
    ThemeModule,
    HomeModule,
  ],
  declarations: [
    ...CTCL_COMPONENTS,
  ]
})
export class CtclModule { }


/* tslint:disable */
import { NgModule } from '@angular/core';
import {ThemeModule} from "../../@theme/theme.module";
import {AngularEchartsModule} from "ngx-echarts";
import {HomeComponent} from "./home.component";
import {ButtonModule, CheckboxModule} from "primeng/primeng";


@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    CheckboxModule,
    ButtonModule
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }

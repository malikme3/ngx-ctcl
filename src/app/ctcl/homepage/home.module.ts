/* tslint:disable */
import {NgModule} from '@angular/core';
import {ThemeModule} from "../../@theme/theme.module";
import {AngularEchartsModule} from "ngx-echarts";
import {HomeComponent} from "./home.component";
import {ButtonModule, CheckboxModule} from "primeng/primeng";
import {CarouselModule} from 'primeng/primeng';
import {LatestMatchesComponent} from "./components/latestmatches/latestmatches.component";
import {CircularComponent} from "./components/circular/circular.component";
import {HomePageService} from "../common/services/homepage.service";
import {ClubsService} from "../common/services/clubs.service";
import {DomHandlerService} from "../common/services/domhandler.service";
import {ServicesConstants} from "../common/services/constants.services";
import {CtclChartComponent} from "./components/ctclchart/polarchart.component";


@NgModule({
    imports: [
        ThemeModule,
        AngularEchartsModule,
        CheckboxModule,
        ButtonModule,
        CarouselModule
    ],
    declarations: [
        HomeComponent,
        LatestMatchesComponent,
        CircularComponent
    ],
    providers: [
        HomePageService,
        ClubsService,
        DomHandlerService,
        ServicesConstants,
        CtclChartComponent

    ]
})
export class HomeModule {
}

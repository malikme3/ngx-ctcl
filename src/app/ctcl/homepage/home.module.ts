/* tslint:disable */
import {NgModule} from '@angular/core';
import {ThemeModule} from "../../@theme/theme.module";
import {AngularEchartsModule} from "ngx-echarts";
import {HomeComponent} from "./home.component";
import {ButtonModule, CheckboxModule, ChartModule} from "primeng/primeng";
import {CarouselModule, GalleriaModule, PanelModule} from 'primeng/primeng';
import {LatestMatchesComponent} from "./components/latestmatches/latestmatches.component";
import {CircularComponent} from "./components/circular/circular.component";
import {HomePageService} from "../common/services/homepage.service";
import {ClubsService} from "../common/services/clubs.service";
import {DomHandlerService} from "../common/services/domhandler.service";
import {ServicesConstants} from "../common/services/constants.services";
import {CtclChartComponent} from "./components/ctclchart/polarchart.component";
import {GalleryComponent} from "./components/photogallery/gallery.component";
import {DashboardModule} from "../../pages/dashboard/dashboard.module";
import {BestPlayersComponent} from "./components/bestplayers/bestplayers.component";
import {CtclSharedModule} from "../shared/shared.module";
import {BasicTablesService} from "../common/services/basictable.service";


@NgModule({
    imports: [
        ThemeModule,
        AngularEchartsModule,
        CheckboxModule,
        ButtonModule,
        CarouselModule,
        DashboardModule,
        GalleriaModule,
        PanelModule,
        ChartModule,
        CtclSharedModule,
        ChartModule
    ],
    declarations: [
        HomeComponent,
        LatestMatchesComponent,
        CircularComponent,
        GalleryComponent,
        BestPlayersComponent,
        CtclChartComponent,


    ],
    providers: [
        HomePageService,
        ClubsService,
        DomHandlerService,
        ServicesConstants,
        CtclChartComponent,
        BestPlayersComponent,
        BasicTablesService,

    ]
})
export class HomeModule {
}

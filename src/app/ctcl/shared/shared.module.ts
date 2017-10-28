/* tslint:disable */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";
import {PolarChartComponent} from "app/ctcl/shared/components/charts/polarchart/polarchart.component";
//import {ChartsModule} from "ng2-charts";
import {ChartModule} from "primeng/primeng";
import {TeamsPointsComponent} from "./components/tables/teamspoints/teamspoints.component";
import {TeamsPointsService} from "../common/services/teamspoints.service";
import {TabMenuComponent} from "./components/tabmenu/tabmenu.component";
import {ChartsModule} from "../../pages/charts/charts.module";
import {BorderedTableComponent} from "./components/tables/borderedtable/borderedTable.component";


@NgModule({
    imports: [
        CommonModule,
        ChartsModule,
        ChartModule,
        RouterModule
    ],

    declarations: [PolarChartComponent, TeamsPointsComponent, TabMenuComponent,BorderedTableComponent],
    exports: [PolarChartComponent, TeamsPointsComponent, TabMenuComponent,BorderedTableComponent],
    providers: [TeamsPointsService]
})
export class CtclSharedModule {
}

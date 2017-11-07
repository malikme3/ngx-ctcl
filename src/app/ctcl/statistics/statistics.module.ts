/* tslint:disable */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TreeModule} from "ng2-tree";
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";

import {Statistics} from "./statistics.component";
import {routing} from "./statistics.routing";
import {BattingRecordComponent} from "./components/battings/battingrecords.component";
import {
  ChartModule, FieldsetModule, GrowlModule, MessagesModule, SharedModule, StepsModule, TabMenuModule,
  TabViewModule, DataTableModule, AccordionModule, PanelModule, SplitButtonModule,
} from "primeng/primeng";
import {MessageService} from "./components/shared.message/messageservice";
import {TablesModule} from "../../pages/tables/tables.module";
import {StatisticsConstantsService} from "../common/services/statistics.constants.service";
import {StatisticsService} from "../common/services/statistics.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TreeModule,
    TablesModule,
    routing,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    ReactiveFormsModule,
    ChartModule,
    TabMenuModule,
    MessagesModule,
    TabViewModule,
    StepsModule,
    GrowlModule,
    FieldsetModule,
    SharedModule,
    AccordionModule,
    PanelModule,
    SplitButtonModule
  ],
  declarations: [
    Statistics,
    BattingRecordComponent,
  ],
  providers: [StatisticsService, StatisticsConstantsService,MessageService,],
})
export class StatisticsModule {
}

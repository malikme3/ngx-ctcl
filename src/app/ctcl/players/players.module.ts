/* tslint:disable */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TreeModule} from "ng2-tree";
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {
  ChartModule, FieldsetModule, GrowlModule, MessagesModule, SharedModule, StepsModule, TabMenuModule,
  TabViewModule, DataTableModule, AccordionModule, PanelModule, SplitButtonModule,
} from "primeng/primeng";
import {TablesModule} from "../../pages/tables/tables.module";
import {PlayersComponent} from "./players.component";
import {PlayerProfileComponent} from "./components/playerprofile.component";
import {routing} from "./players.routing";


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
    PlayersComponent,
    PlayerProfileComponent,
  ],
  providers: [],
})
export class PlayersModule {
}

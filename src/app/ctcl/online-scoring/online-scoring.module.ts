/* tslint:disable */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TreeModule} from "ng2-tree";
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {
  ChartModule, FieldsetModule, GrowlModule, MessagesModule, SharedModule, StepsModule, TabMenuModule,
  TabViewModule, DataTableModule, AccordionModule, PanelModule, SplitButtonModule, RadioButtonModule, CheckboxModule,
  AutoCompleteModule,
} from "primeng/primeng";
import {TablesModule} from "../../pages/tables/tables.module";
import {OnlineScoringComponent} from "./online-scoring.component";
import {routing} from "./online-scoring.routing";
import {LiveScoreComponent} from "./components/live-score.component";
import {ThemeModule} from "../../@theme/theme.module";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {ButtonsModule} from "../../pages/ui-features/buttons/buttons.module";
import {LiveScoreConstants} from "../common/services/live-score-constants.service";
import {CtclSharedModule} from "../shared/shared.module";


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
    CtclSharedModule,
    AccordionModule,
    PanelModule,
    SplitButtonModule,
    ThemeModule,
    RadioButtonModule,
    CheckboxModule,
    AutoCompleteModule,
    MatInputModule, MatRadioModule,ButtonsModule,
  ],
  declarations: [OnlineScoringComponent, LiveScoreComponent
  ],
  providers: [LiveScoreConstants],
})
export class OnlineScoringModule {
}

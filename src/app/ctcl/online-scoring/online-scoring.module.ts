/* tslint:disable */
import {NgModule} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
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
import {MatSelectModule} from '@angular/material';
import {MatRadioModule} from "@angular/material/radio";
import {ButtonsModule} from "../../pages/ui-features/buttons/buttons.module";
import {ClubsService} from '../common/services/clubs.service';
import {CommonUtilsService} from '../common/services/common-utils.service';
import {LiveScoreConstants} from "../common/services/live-score-constants.service";
import {LiveScoreService} from '../common/services/live-score.service';
import {MatchesService} from '../common/services/matches.service';
import {CtclSharedModule} from "../shared/shared.module";
import {PostLiveScoreComponent} from './components/post-live/post-live-score.component';
import {PreMatchCaptainsComponent} from './components/pre-live-captains/pre-match-captains.component';
import {PreMatchUmpireComponent} from './components/pre-live-umpire/pre-match-umpire.component';
import {PreLiveScoreComponent} from './components/pre-live/pre-live.component';


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
    MatInputModule, MatRadioModule, ButtonsModule, MatSelectModule,
  ],
  declarations: [OnlineScoringComponent, LiveScoreComponent, PreLiveScoreComponent, PostLiveScoreComponent, PreMatchCaptainsComponent, PreMatchUmpireComponent,
  ],
  providers: [LiveScoreConstants, LiveScoreService, DatePipe, ClubsService, CommonUtilsService, MatchesService],
})
export class OnlineScoringModule {
}

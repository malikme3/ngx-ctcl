/* tslint:disable */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AggregateComponent} from "./aggregate.component";
import {routing} from "./aggregate.routing";
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatchesService} from "../common/services/matches.service";
import {MatchesConstants} from "../common/services/matches.constant.service";
import {MatchesDataStoreService} from "../common/services/matches-data-store.service";
import {CtclSharedModule} from "../shared/shared.module";
import {AutoCompleteModule} from "primeng/components/autocomplete/autocomplete";
import {ThemeModule} from "../../@theme/theme.module";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {MatRadioModule} from '@angular/material';
import {SelectModule} from 'ng-select';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {ScoreBattingsDetailsComponent} from "./submit-score/submit-batting-details/submit-battings-details.component";
import {CommonUtilsService} from "../common/services/common-utils.service";
import {ScoreBasicDetailsComponent} from "./submit-score/submit-basic-details/score-basic-details.component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {ScoreBowlingDetailsComponent} from "./submit-score/submit-bowling-details/submit-bowlings-details.component";
import {ScoreExtrasDetailsComponent} from "./submit-score/submit-extras-details/submit-extras-details.component";
import {ScoreTotalsDetailsComponent} from "./submit-score/submit-totals-details/submit-totals-details.component";
import {ScoreWicketsDetailsComponent} from "./submit-score/submit-wickets-details/submit-wickets-details.component";
import {AuthenticationService} from "../auth-guard/authentication.service";
import {AuthGuardService} from "../auth-guard/auth-guard.service";
import {ServicesConstants} from "../common/services/constants.services";


const components = [AggregateComponent, ScoreBasicDetailsComponent, ScoreBattingsDetailsComponent, ScoreBowlingDetailsComponent,
    ScoreExtrasDetailsComponent, ScoreTotalsDetailsComponent, ScoreWicketsDetailsComponent];

@NgModule({
    imports: [ThemeModule, RouterModule, CtclSharedModule, FormsModule, ReactiveFormsModule, CommonModule, AutoCompleteModule,
        CalendarModule, MatRadioModule, SelectModule, MatInputModule, MatSelectModule, FieldsetModule, routing],
    declarations: [...components],
    providers: [MatchesService, MatchesConstants, MatchesDataStoreService, CommonUtilsService, AuthenticationService, AuthGuardService, ServicesConstants],
})
export class AggregateModule {
}

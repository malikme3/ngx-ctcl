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
import {ScoreBattingsDetailsComponent} from "./submit-score/scoring-batting-details/score-battings-details.component";
import {CommonUtilsService} from "../common/services/common-utils.service";
import {ScoreBasicDetailsComponent} from "./submit-score/basic-details/score-basic-details.component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";


const components = [AggregateComponent, ScoreBasicDetailsComponent,ScoreBattingsDetailsComponent];

@NgModule({
    imports: [ThemeModule,RouterModule,CtclSharedModule,FormsModule,ReactiveFormsModule,CommonModule,AutoCompleteModule,
        CalendarModule,MatRadioModule,SelectModule,MatInputModule,MatSelectModule,FieldsetModule, routing],
    declarations: [...components],
    providers: [MatchesService, MatchesConstants, MatchesDataStoreService, CommonUtilsService],
})
export class AggregateModule {
}

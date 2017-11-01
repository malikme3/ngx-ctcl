/* tslint:disable */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BasicDetailsComponent} from "./submit-score/basic-details/basic-details.component";
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


const components = [AggregateComponent, BasicDetailsComponent];

@NgModule({
    imports: [ThemeModule,RouterModule,CtclSharedModule,FormsModule,ReactiveFormsModule,CommonModule,AutoCompleteModule,CalendarModule, routing],
    declarations: [...components],
    providers: [MatchesService, MatchesConstants, MatchesDataStoreService]
})
export class AggregateModule {
}

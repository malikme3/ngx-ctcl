/* tslint:disable */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BasicDetailsComponent} from "./submit-score/basic-details/basic-details.component";
import {AggregateComponent} from "./aggregate.component";
import {routing} from "./aggregate.routing";
import {MatchesService} from "../common/services/matches.service";
import {MatchesConstants} from "../common/services/matches.constant.service";
import {MatchesDataStoreService} from "../common/services/matches-data-store.service";

const components = [AggregateComponent, BasicDetailsComponent];

@NgModule({
    imports: [RouterModule, routing],
    declarations: [...components],
    providers: [MatchesService, MatchesConstants, MatchesDataStoreService]
})
export class AggregateModule {
}

/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {AggregateComponent} from "./aggregate.component";
import {ScoreBattingsDetailsComponent} from "./submit-score/scoring-batting-details/score-battings-details.component";
import {ScoreBasicDetailsComponent} from "./submit-score/basic-details/score-basic-details.component";

const routes: Routes = [
    {
        path: '',
        component: AggregateComponent,
        children: [
            {path: 'basic-details', component: ScoreBasicDetailsComponent},
            {path: 'battings-details', component: ScoreBattingsDetailsComponent},
        ]
    }
];

export const routing = RouterModule.forChild(routes);

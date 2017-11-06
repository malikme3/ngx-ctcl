/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {ScoreBattingsDetailsComponent} from "./submit-score/submit-batting-details/submit-battings-details.component";
import {ScoreBasicDetailsComponent} from "./submit-score/submit-basic-details/score-basic-details.component";
import {AggregateComponent} from "./aggregate.component";
import {ScoreBowlingDetailsComponent} from "./submit-score/submit-bowling-details/submit-bowlings-details.component";

const routes: Routes = [
    {
        path: '',
        component: AggregateComponent,
        children: [
            {path: 'basic-details', component: ScoreBasicDetailsComponent},
            {path: 'battings-details', component: ScoreBattingsDetailsComponent},
            {path: 'bowlings-details', component: ScoreBowlingDetailsComponent},
        ]
    }
];

export const routing = RouterModule.forChild(routes);

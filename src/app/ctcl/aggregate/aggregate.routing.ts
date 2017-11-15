/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {ScoreBattingsDetailsComponent} from "./submit-score/submit-batting-details/submit-battings-details.component";
import {ScoreBasicDetailsComponent} from "./submit-score/submit-basic-details/score-basic-details.component";
import {AggregateComponent} from "./aggregate.component";
import {ScoreBowlingDetailsComponent} from "./submit-score/submit-bowling-details/submit-bowlings-details.component";
import {ScoreExtrasDetailsComponent} from "./submit-score/submit-extras-details/submit-extras-details.component";
import {ScoreTotalsDetailsComponent} from "./submit-score/submit-totals-details/submit-totals-details.component";
import {ScoreWicketsDetailsComponent} from "./submit-score/submit-wickets-details/submit-wickets-details.component";

const routes: Routes = [
  {
    path: '',
    component: AggregateComponent,
    children: [
      {path: 'basic-details', component: ScoreBasicDetailsComponent},
      {path: 'battings-details', component: ScoreBattingsDetailsComponent},
      {path: 'bowlings-details', component: ScoreBowlingDetailsComponent},
      {path: 'extras-details', component: ScoreExtrasDetailsComponent},
      {path: 'totals-details', component: ScoreTotalsDetailsComponent},
      {path: 'wickets-details', component: ScoreWicketsDetailsComponent},
      // {path: 'login', component: LoginComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);

/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {OnlineScoringComponent} from "./online-scoring.component";
import {LiveScoreComponent} from "./components/live-score.component";

const routes: Routes = [
  {
    path: '',
    component: OnlineScoringComponent,
    children: [
      {path: 'live-scoring', component: LiveScoreComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);

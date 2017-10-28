import { Routes, RouterModule } from '@angular/router';

import { MatchesComponent } from './matches.component';
import {ResultsComponent} from "./components/results/results.component";

const routes: Routes = [
  {
    path: '',
    component: MatchesComponent,
    children: [
      { path: 'results', component: ResultsComponent },
      /*{ path: 'scheduleView', component: ScheduleComponent },
      {path: 'pointsTableView', component: PointsTableComponent},
      {path: 'scoreView', component: ScoreComponent},
      {path: 'submitScore', component: SubmitScoreComponent}*/
      /*{path: 'submitScoreStep2', component: SubmitScoreBatting}*/
    ]
  }
];



export const routing = RouterModule.forChild(routes);

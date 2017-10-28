import {Routes, RouterModule} from '@angular/router';

import {MatchesComponent} from './matches.component';
import {ResultsComponent} from "./components/results/results.component";
import {DetailedScoreComponent} from "./components/detailed.score/score.component";

const routes: Routes = [
    {
        path: '',
        component: MatchesComponent,
        children: [
            {path: 'results', component: ResultsComponent},
            {path: 'scoreView', component: DetailedScoreComponent},
            /*{ path: 'scheduleView', component: ScheduleComponent },
            {path: 'pointsTableView', component: PointsTableComponent},
            {path: 'scoreView', component: DetailedScoreComponent},
            {path: 'submitScore', component: SubmitScoreComponent}*/
            /*{path: 'submitScoreStep2', component: SubmitScoreBatting}*/
        ]
    }
];


export const routing = RouterModule.forChild(routes);

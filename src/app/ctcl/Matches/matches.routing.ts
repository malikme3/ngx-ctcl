/* tslint:disable */
import {Routes, RouterModule} from '@angular/router';

import {MatchesComponent} from './matches.component';
import {ResultsComponent} from "./components/results/results.component";
import {DetailedScoreComponent} from "./components/detailed.score/score.component";
import {PointsTableComponent} from "./components/teampoints/pointstable.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";

const routes: Routes = [
    {
        path: '',
        component: MatchesComponent,
        children: [
            {path: 'results', component: ResultsComponent},
            {path: 'scoreView', component: DetailedScoreComponent},
            {path: 'pointsTables', component: PointsTableComponent},
            {path: 'scheduleView', component: ScheduleComponent},
        ]
    }
];


export const routing = RouterModule.forChild(routes);

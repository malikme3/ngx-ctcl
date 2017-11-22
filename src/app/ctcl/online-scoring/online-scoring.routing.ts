/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {OnlineScoringComponent} from "./online-scoring.component";
import {LiveScoreComponent} from "./components/live-score.component";
import {PostLiveScoreComponent} from './components/post-live/post-live-score.component';
import {PreLiveScoreComponent} from './components/pre-live/pre-live.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineScoringComponent,
    children: [
      {path: 'pre-live-scoring', component: PreLiveScoreComponent},
      {path: 'live-scoring', component: LiveScoreComponent},
      {path: 'post-live-scoring', component: PostLiveScoreComponent},
    ]
  }
];

export const routing = RouterModule.forChild(routes);

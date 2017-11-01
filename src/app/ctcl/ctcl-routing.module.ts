/* tslint:disable */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CtclComponent} from './ctcl.component';
import {HomeComponent} from "./homepage/home.component";

const routes: Routes = [{
    path: '',
    component: CtclComponent,
    children: [

        {
            path: 'matches',
            loadChildren: './Matches/matches.module#MatchesModule',
        },
        {
            path: 'statistics',
            loadChildren: './statistics/statistics.module#StatisticsModule',
        },
        {
            path: 'clubs',
            loadChildren: './clubs/clubs.module#ClubsModule',
        },
        {
            path: 'players',
            loadChildren: './players/players.module#PlayersModule',
        },
        {
            path: 'aggregate',
            loadChildren: './aggregate/aggregate.module#AggregateModule',
        },
        {
            path: '',
            component: HomeComponent,
        }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CtclRoutingModule {
}

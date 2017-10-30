/* tslint:disable */
import {Routes, RouterModule} from '@angular/router';

import {ClubsPageComponent} from "./components/clubsHome/clubs.page.component";
import {ClubsComponent} from "./clubs.component";
import {TeamsViewComponent} from "./components/teamsView/teamsView.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
    {
        path: '',
        component: ClubsComponent,
        children: [
            {path: 'teamsview', component: TeamsViewComponent},
            {path: 'clubsview', component: ClubsPageComponent}
        ]
    }
];

export const routing = RouterModule.forChild(routes);

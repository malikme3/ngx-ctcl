/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {PlayersComponent} from "./players.component";
import {PlayerProfileComponent} from "./components/playerprofile.component";

const routes: Routes = [
    {
        path: '',
        component: PlayersComponent,
        children: [
            {path: 'plyersProfile', component: PlayerProfileComponent},
        ]
    }
];

export const routing = RouterModule.forChild(routes);

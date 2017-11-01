/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {AggregateComponent} from "./aggregate.component";
import {BasicDetailsComponent} from "./submit-score/basic-details/basic-details.component";

const routes: Routes = [
    {
        path: '',
        component: AggregateComponent,
        children: [
            {path: 'basic-details', component: BasicDetailsComponent},
        ]
    }
];

export const routing = RouterModule.forChild(routes);

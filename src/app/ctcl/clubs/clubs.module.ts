/* tslint:disable */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TreeModule} from 'ng2-tree';

import {routing} from './clubs.routing';
import {
    AccordionModule,
    DataScrollerModule,
    FieldsetModule,
    OrganizationChartModule,
    DataTableModule,
    SharedModule,
    ContextMenuModule
} from "primeng/primeng";
import {TablesModule} from "../../pages/tables/tables.module";
import {ClubsService} from "../common/services/clubs.service";
import {ClubsComponent} from "./clubs.component";
import {ClubsPageComponent} from "./components/clubsHome/clubs.page.component";
import {TeamsViewComponent} from "./components/teamsView/teamsView.component";
import {CtclSharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TreeModule,
        TablesModule,
        OrganizationChartModule,
        FieldsetModule,
        AccordionModule,
        DataTableModule,
        SharedModule,
        ContextMenuModule,
        DataScrollerModule,
        CtclSharedModule,
        routing
    ],
    declarations: [
        ClubsComponent,
        TeamsViewComponent,
        ClubsPageComponent,
    ],
    exports: [ClubsComponent, ClubsPageComponent],
    providers: [ClubsService],
})
export class ClubsModule {
}

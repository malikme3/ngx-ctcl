///<reference path="../../../../node_modules/primeng/components/panel/panel.d.ts"/>
/* tslint:disable */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TreeModule} from 'ng2-tree';
import {HttpModule} from "@angular/http";
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {routing} from './matches.routing';
import {MatchesComponent} from './matches.component';
import {ResultsComponent} from './components/results/results.component';
import {ResultsService} from './components/results/results.service';
import {MatchesConstants} from './components/matches.constant.service';
import {MatchesService} from "../common/services/matches.service";
import {LabelComponent} from "./components/label/labelComponent";
import {MatchesDataStoreService} from "./components/matches-data-store";
import {
  DataTableModule, DropdownModule, ProgressBarModule, SharedModule,
  SplitButtonModule, FieldsetModule, PanelModule,
} from "primeng/primeng";
import {HomePageService} from "../common/services/homepage.service";
import {CtclSharedModule} from "../shared/shared.module";
import {CarouselService} from "../common/services/carousel.service";
import {DetailedScoreComponent} from "./components/detailed.score/score.component";
import {ThemeModule} from "../../@theme/theme.module";
import {PointsTableComponent} from "./components/teampoints/pointstable.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";


@NgModule({
    imports: [
        CommonModule,
        ThemeModule,
        FormsModule,
        TreeModule,
        routing,
        Ng2SmartTableModule,
        DataTableModule,
        ReactiveFormsModule,
        ProgressBarModule,
        SplitButtonModule,
        DropdownModule,
        DataTableModule,
        SharedModule,
        FieldsetModule,
        CtclSharedModule,
        RouterModule,
        PanelModule,
        //SharedModule

    ],
    declarations: [
        MatchesComponent,
        ResultsComponent,
        LabelComponent,
        DetailedScoreComponent,
        PointsTableComponent,
        ScheduleComponent,
    ],
    providers: [
        ResultsService, MatchesConstants, HomePageService, MatchesService, MatchesDataStoreService, CarouselService
    ],
})
export class MatchesModule {
}

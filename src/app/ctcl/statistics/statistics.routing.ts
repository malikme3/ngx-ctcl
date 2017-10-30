/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {Statistics} from "./statistics.component";
import {BattingRecordComponent} from "./components/battings/battingrecords.component";

const routes: Routes = [
  {
    path: '',
    component: Statistics,
    children: [
      {path: 'battingRecords', component: BattingRecordComponent},
      //{ path: 'scheduleView', component: ScheduleComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);

/* tslint:disable */
import {Component, Input} from '@angular/core';

import {TeamsPointsPojo} from "../../../../common/domain/teamspoints.pojo";
import {TeamsPointsService} from "../../../../common/services/teamspoints.service";

@Component({
  selector: 'ctcl-teams-points-table',
  templateUrl: 'teamspoints.component.html',
  styleUrls: ['teamspoints.component.scss'],
})
export class TeamsPointsComponent {
  @Input() points;
  @Input() group;

  metricsTableData: Array<any>;

  constructor(private _basicTablesService: TeamsPointsService) {
    this.metricsTableData = _basicTablesService.metricsTableData;
  }
  ngOnInit(): void {
    this.teamPoints = this.team_points(this.group.groupCategory, this.group.seasonName);

  }

  teamPoints: TeamsPointsPojo[];
  team_points(group: string, season: string): TeamsPointsPojo[] {
    this._basicTablesService
      .getTeamPoints(group, season)
      .then(res => this.teamPoints = res);
    return this.teamPoints;
}};

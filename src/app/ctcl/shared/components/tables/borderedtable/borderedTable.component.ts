/* tslint:disable */
import {Component, Input} from '@angular/core';
import {BasicTablesService} from "../../../../common/services/basictable.service";


@Component({
    selector: 'ctcl-bordered-table',
    templateUrl: './borderedTable.html',
})
export class BorderedTableComponent {
    @Input() points;
    @Input() group;

    metricsTableData: Array<any>;

    constructor(private _basicTablesService: BasicTablesService) {
        this.metricsTableData = _basicTablesService.metricsTableData;
    }

    ngOnInit(): void {
        this.teamPoints = this.team_points(this.group.groupCategory, this.group.seasonName);

    }

    teamPoints: any[];

    team_points(group: string, season: string): any[] {
        this._basicTablesService
            .getTeamPoints(group, season)
            .then(res => this.teamPoints = res);
        return this.teamPoints;
    }
}

/* tslint:disable */
/**
 * Created by HudaZulifqar on 6/27/2017.
 */
import {Component} from "@angular/core";
import {MatchesService} from "../../../common/services/matches.service";
import {MatchesConstants} from "../matches.constant.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'ctcl-matches-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private matchesService: MatchesService, private matchesConstants: MatchesConstants) {
  }

  data;
  items: any[] = [];
  // Default schedule for all leagues
  leagueType = 'null';

  ngOnInit(): void {
    this.data = this.getSeasonGroups(this.leagueType);
    this.items = [
      {
        label: '2017: All Format', icon: 'fa-refresh', command: () => {
          this.update();
        }
      },
      {
        label: '2017:20 Overs', icon: 'fa-link', command: () => {
          this.update();
        }
      },
      {label: '2017:35 Overs', icon: 'fa-link'},
      // routing purpose
      {label: 'Recent Matches', icon: 'fa-paint-brush', routerLink: ['/']}
    ];
  }

  update() {
    console.log("Leagues type is updated");
  }
  onRowEdit(val) {
    console.log("Row is selected");
  }
  settings = this.matchesConstants.scheduelTable;
  getSeasonGroups(seasonId: string) {
    console.info('Request for league schedules from schedule component');
    const types$ = this.matchesService.getSchedule(seasonId);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.data = responce,
      (err) => console.error('matchesResult: Response Error =>', err),
      () => this.seasonGroupsLoaded(this.data));
  }

  getLeagueSchedule() {
    this.getSeasonGroups(this.leagueType);
  }
  seasonGroupsLoaded(value) {
    console.log("seasonGroupsLoaded request is completed");
  }
}

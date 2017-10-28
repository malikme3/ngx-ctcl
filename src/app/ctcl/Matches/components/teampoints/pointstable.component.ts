import {Component} from "@angular/core";
import {HomePageService} from "../../../common/services/homepage.service";
import {Subject} from "rxjs/Subject";

/**
 * Created by HudaZulifqar on 6/27/2017.
 */
@Component({
  selector: 'ctcl-points-table',
  templateUrl: 'pointstable.component.html',
})
export class PointsTableComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private homePageService: HomePageService) {
  }

  groups;
  // Default Year
  year = '2017';

  ngOnInit(): void {
    this.groups = this.getSeasonGroups();
  }

  getSeasonGroups() {
    console.info('Request for Season groups from point table component');
    const types$ = this.homePageService.getSeasonGroups(this.year);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.groups = responce,
      (err) => console.error('matchesResult: Response Error =>', err),
      () => this.seasonGroupsLoaded(this.groups));

  }

  seasonGroupsLoaded(value) {
    console.log("seasonGroupsLoaded request is completed");
  };

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

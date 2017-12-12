/* tslint:disable */
import {Component} from "@angular/core";
import {ResultsService} from "./results.service";
import {MatchesConstants} from "../matches.constant.service";
import {Router} from "@angular/router";
import {SelectItem} from "primeng/primeng";
import {Subject} from "rxjs/Subject";
import {ResultPojo} from "../../../common/domain/result.pojo";
import {CarouselService} from "../../../common/services/carousel.service";

@Component({
  selector: 'results-view',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})

export class ResultsComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  source;
  dataList: any;
  collapsed = false;
  result: ResultPojo[];
  brands: SelectItem[];
  host_teams: any[] = [];
  guest_teams: any;
  guest_team_opt: any[] = [];
  host_team_opt: any[] = [];

  colors: SelectItem[];

  yearFilter: number;
  private url: string = '/ctcl/matches/scoreView';

  constructor(private router: Router,
    private _resultsService: ResultsService,
    private matchesConstants: MatchesConstants,
    private carService: CarouselService) {
  }

  ngOnInit(): void {
    this.source = this.getBasicResults(30);
    // this.carService.getCarsMedium().then(cars => this.cars = cars);

    this.guest_team_opt.push({label: 'All Teams', value: null});
    this.host_team_opt.push({label: 'All Teams', value: null});

  }


  // columns setting for basic score card table
  settings = this.matchesConstants.scoreTableSettings;
  isDropDown = true;
  /* 35 overs- Defualt league result display*/


  options = [
    {id: 20, name: '20 Overs Leagues', path: '', year: 2017},
    {id: 30, name: '30 Overs Leagues', path: '', year: 2017},
    {id: 35, name: '35 Overs Leagues', path: '', year: 2017},
    {id: 20, name: '20 Overs Leagues', path: '', year: 2016},
    {id: 30, name: '30 Overs Leagues', path: '', year: 2016},
    {id: 35, name: '35 Overs Leagues', path: '', year: 2016},
    {id: 20, name: '20 Overs Leagues', path: '', year: 2015},
    {id: 30, name: '30 Overs Leagues', path: '', year: 2015},
    {id: 35, name: '35 Overs Leagues', path: '', year: 2015}
  ];
  leagueType: number = 30;
  options2017 = [
    {id: 31, name: '20 Overs', path: '', year: 2017},
    {id: 30, name: '35 Overs', path: '', year: 2017}];


  // columns data for basic score card table`
  getBasicResults(seasonId) {
    console.info("Fetching results for league for id :", seasonId)
    const result$ = this._resultsService.getMatchesResult(seasonId);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.result = responce as ResultPojo[],
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.LoadedResult(this.result));

  }

  LoadedResult(value) {
    console.log("Result loading is complete: Result", value);

    for (var val of this.result) {
      this.guest_team_opt.push({label: val.guest_team, value: val.guest_team});
      this.host_team_opt.push({label: val.host_team, value: val.host_team});
    }
    console.log("Host Teams are: ", this.host_team_opt);
    console.log("Guest Teams are: ", this.guest_team_opt);
    this.host_teams = this.host_team_opt;
    this.guest_teams = this.guest_team_opt;
  }

  getLeagueResults() {
    this.getBasicResults(this.leagueType);

  }

  getDetailedScore(val) {
    const id: string = val.data.game_id;
    console.info("Details Score of gameId: ", val.data.game_id);
    this.router.navigate([this.url], {queryParams: {gameId: id}});
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

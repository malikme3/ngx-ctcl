/* tslint:disable */
/**
 * Created by HudaZulifqar on 8/18/2017.
 */
import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {HomePageService} from "../../../common/services/homepage.service";

@Component({
  selector: 'ctcl-best-players',
  templateUrl: 'bestplayers.component.html',
  styleUrls: ['bestplayers.component.scss'],
})
export class BestPlayersComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  batting_recordsT20: any;
  batting_recordsT30: any;
  recordsObjectT20: any = [];
  recordsObjectT30: any = [];
  recordsDataT20: any = [];
  recordsDataT30: any = [];

  //Bowling
  bowling_recordsT20: any;
  bowling_recordsT30: any;
  bowling_object: any = [];
  bowling_data_t20: any = [];
  bowling_data_t30: any = [];

  constructor(private dashboardService: HomePageService) {
  }

  ngOnInit() {
    this.battingRecordsT20();
    this.battingRecordsT30();
    this.bowlingRecordsT20();
    this.bowlingRecordsT30();
  }

  battingRecordsT20() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.dashboardService.getBattingRecords(31);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.batting_recordsT20 = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadDataT20(this.batting_recordsT20));

  }

  battingRecordsT30() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.dashboardService.getBattingRecords(30);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.batting_recordsT30 = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadDataT30(this.batting_recordsT30));

  }

  bowlingRecordsT20() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.dashboardService.getBowlingRecords(31);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.bowling_recordsT20 = responce,
      (err) => console.error('getBowlingRecords20: Response Error =>', err),
      () => this.loadBowlingData(20, this.bowling_recordsT20));

  }

  bowlingRecordsT30() {
    console.info("Fetching battingRecords list: ")
    const types$ = this.dashboardService.getBowlingRecords(30);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.bowling_recordsT30 = responce,
      (err) => console.error('getBowlingRecords30: Response Error =>', err),
      () => this.loadBowlingData(30, this.bowling_recordsT30));

  }

  loadDataT20(val) {

    for (let score of val) {
      if (!this.recordsDataT20[9]) {
        this.recordsDataT20.push({
          matches: score.matches,
          runs: score.runs,
          average: score.average,
          fifties: score.fifties,
          name: score.playerFullName
        })
      }
    }
    console.log("recordsDataT20 :", this.recordsDataT20);
    this.recordsObjectT20 = this.recordsDataT20;

  }

  loadDataT30(val) {

    for (let score of val) {
      if (!this.recordsDataT30[9]) {
        this.recordsDataT30.push({
          matches: score.matches,
          runs: score.runs,
          average: score.average,
          fifties: score.fifties,
          name: score.playerFullName
        })
      }
    }
    console.log("recordsDataT30 :", this.recordsDataT30);
    this.recordsObjectT30 = this.recordsDataT30;

  }

  loadBowlingData(league, rescords) {
    for (let score of rescords) {
      if (!this.bowling_object[9]) {
        this.bowling_object.push({
          matches: score.matches,
          runs: score.bowling_runs,
          average: score.average,
          wickets: score.wickets,
          name: score.full_name
        })
      }
    }
    console.log("Record Data :", this.recordsDataT30);
    if (league === 20) {
      this.bowling_data_t20 = this.bowling_object;
    }
    if (league === 30) {
      this.bowling_data_t30 = this.bowling_object;
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

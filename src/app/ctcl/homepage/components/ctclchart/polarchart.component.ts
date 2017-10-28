/* tslint:disable */
import {AfterViewInit, Component, OnDestroy} from "@angular/core";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/takeUntil';
import {HomePageService} from "../../../common/services/homepage.service";

/**
 * Created by HudaZulifqar on 8/21/2017.
 */
@Component({
  selector: 'ctcl-pol-chart',
  templateUrl: 'polarchart.component.html',
})
export class CtclChartComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  data: any;
  data20: any;
  data30: any;
  result:string ='Best Scorers';
  checkNum: number = 0;
  batting_recordsT20: any;
  batting_recordsT30: any;

  constructor(private dashboardService: HomePageService) {

  }
  ngOnInit() {
    this.battingRecordsT20();
    this.battingRecordsT30();
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
    setInterval(() => {
      this.updateDisplayData();
    }, 3000);

  }



  updateDisplayData() {
    if (this.checkNum === 0) {
      this.data = this.data20;
      this.checkNum = 1;
    } else if (this.checkNum === 1) {
      this.data = this.data30;
      this.checkNum = 0;
    }
  }

  loadDataT20(val) {

    this.data20 = {
      width: '92px',

      labels: [
        this.batting_recordsT20[0].playerFullName,
        this.batting_recordsT20[1].playerFullName,
        this.batting_recordsT20[2].playerFullName,
        this.batting_recordsT20[3].playerFullName,
        this.batting_recordsT20[4].playerFullName,
        this.batting_recordsT20[5].playerFullName,
        this.batting_recordsT20[6].playerFullName,
        this.batting_recordsT20[7].playerFullName],
      datasets: [

        {
          label: '2017-T20:Total Score',
          backgroundColor: '#f3fe34',
          borderColor: '#b0f24e',

          data: [
            this.batting_recordsT20[0].runs,
            this.batting_recordsT20[1].runs,
            this.batting_recordsT20[2].runs,
            this.batting_recordsT20[3].runs,
            this.batting_recordsT20[4].runs,
            this.batting_recordsT20[5].runs,
            this.batting_recordsT20[6].runs,
            this.batting_recordsT20[7].runs]

        }
      ]

    };

  }

  loadDataT30(val) {
    this.data30 = {
      width: '92px',

      labels: [
        this.batting_recordsT30[0].playerFullName,
        this.batting_recordsT30[1].playerFullName,
        this.batting_recordsT30[2].playerFullName,
        this.batting_recordsT30[3].playerFullName,
        this.batting_recordsT30[4].playerFullName,
        this.batting_recordsT30[5].playerFullName,
        this.batting_recordsT30[6].playerFullName,
        this.batting_recordsT30[7].playerFullName],
      datasets: [

        {
          label: '2017-T35: Total Score',
          backgroundColor: '#fe924a',
          borderColor: '#c0e3ee',

          data: [
            this.batting_recordsT30[0].runs,
            this.batting_recordsT30[1].runs,
            this.batting_recordsT30[2].runs,
            this.batting_recordsT30[3].runs,
            this.batting_recordsT30[4].runs,
            this.batting_recordsT30[5].runs,
            this.batting_recordsT30[6].runs,
            this.batting_recordsT30[7].runs]

        }
      ]

    };

  }
}

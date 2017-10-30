/* tslint:disable */
import {Component} from "@angular/core";
import {MenuItem, Message} from "primeng/primeng";
import {MessageService} from '../shared.message/messageservice';
import {Subject} from 'rxjs/Subject';
import {StatisticsConstantsService} from "../../../common/services/statistics.constants.service";
import {StatisticsService} from "../../../common/services/statistics.service";
import {BattinginputsPojo} from "../../../common/domain/battinginputs.pojo";
import {forEach} from "@angular/router/src/utils/collection";

/**
 * Created by HudaZulifqar on 9/5/2017.
 */
@Component({
  selector: 'ctcl-battings-records',
  templateUrl: './battingrecords.component.html',
  styleUrls: ['battingrecords.component.scss'],
  providers: [MessageService],
})

export class BattingRecordComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  previousFiveYear: any;
  previousFiveYearsRecords: any[] = [];
  t20Records: any[] = [];
  t35Records: any[] = [];
  battingRecordsList: any;
  data: any = [];
  dataMatches: any;
  dataRuns: any;
  dataAverage: any;
  checkNum: number = 0;
  msgs: Message[] = [];
  items: MenuItem[];
  itemsSteps: MenuItem[];

  //setting default values
  battingRecordInputs: BattinginputsPojo =
    {
      playerId: null,
      teamId: null,
      clubId: null,
      seasonId: null,
      seasonYear: null,
    };

  constructor(private statisticsService: StatisticsService,
              private  statisticsConstantsService: StatisticsConstantsService,
              private messageService: MessageService) {

  }

  ngOnInit() {

    var d = new Date().getFullYear();
    //previous 5 years
    this.previousFiveYear = (d - 5);
    console.log("Previous 5th Years: ", this.previousFiveYear);
    setInterval(() => {
      //replaced function() by ()=>
      this.updateDisplayData();
    }, 3000);

    this.itemsSteps = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
    this.items = [
      {label: 'Statistics', icon: 'fa-bar-chart'},
      {label: 'Team', icon: 'fa-calendar'},
      {label: 'Club', icon: 'fa-book'},
      {label: 'League', icon: 'fa-support'},
      {label: 'All-Round', icon: 'fa-twitter'}
    ];

    this.battingRecords(this.battingRecordInputs);
  }

  onTabChange(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
  }

  settings = this.statisticsConstantsService.battingRecordsTableSettings;

  battingRecords(inputs) {
    console.info("Fetching battingRecords list: ");
    const types$ = this.statisticsService.getBattingRecords(inputs);

    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.battingRecordsList = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.loadData(this.battingRecordsList));
  }

  loadData(records) {

    this.data = {
      width: '92px',

      labels: [
        this.battingRecordsList[0].playerFullName,
        this.battingRecordsList[1].playerFullName,
        this.battingRecordsList[2].playerFullName,
        this.battingRecordsList[3].playerFullName,
        this.battingRecordsList[4].playerFullName,
        this.battingRecordsList[5].playerFullName,
        this.battingRecordsList[6].playerFullName,
        this.battingRecordsList[7].playerFullName],
      datasets: [
        {
          label: 'Matches',
          backgroundColor: '#6421f5',
          borderColor: '#1E88E5',
          width: '2',
          data: [
            this.battingRecordsList[0].matches,
            this.battingRecordsList[1].matches,
            this.battingRecordsList[2].matches,
            this.battingRecordsList[3].matches,
            this.battingRecordsList[4].matches]
        },
        {
          label: 'Total Score',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',

          data: [
            this.battingRecordsList[0].runs,
            this.battingRecordsList[1].runs,
            this.battingRecordsList[2].runs,
            this.battingRecordsList[3].runs,
            this.battingRecordsList[4].runs,
            this.battingRecordsList[5].runs,
            this.battingRecordsList[6].runs,
            this.battingRecordsList[7].runs]

        },
        {
          label: 'Average',
          backgroundColor: '#cc1262',
          borderColor: '#7CB342',
          width: '10px',
          data: [
            this.battingRecordsList[0].average,
            this.battingRecordsList[1].average,
            this.battingRecordsList[2].average,
            this.battingRecordsList[3].average,
            this.battingRecordsList[4].average]
        }
      ]

    };
    this.dataMatches = {
      width: '92px',

      labels: [
        this.battingRecordsList[0].playerFullName,
        this.battingRecordsList[1].playerFullName,
        this.battingRecordsList[2].playerFullName,
        this.battingRecordsList[3].playerFullName,
        this.battingRecordsList[4].playerFullName,
        this.battingRecordsList[5].playerFullName,
        this.battingRecordsList[6].playerFullName,
        this.battingRecordsList[7].playerFullName],
      datasets: [
        {
          label: 'Matches',
          backgroundColor: '#6421f5',
          borderColor: '#1E88E5',
          width: '2',
          data: [
            this.battingRecordsList[0].matches,
            this.battingRecordsList[1].matches,
            this.battingRecordsList[2].matches,
            this.battingRecordsList[3].matches,
            this.battingRecordsList[4].matches]
        }
      ]
    };

    this.dataRuns = {
      width: '92px',

      labels: [
        this.battingRecordsList[0].playerFullName,
        this.battingRecordsList[1].playerFullName,
        this.battingRecordsList[2].playerFullName,
        this.battingRecordsList[3].playerFullName,
        this.battingRecordsList[4].playerFullName,
        this.battingRecordsList[5].playerFullName,
        this.battingRecordsList[6].playerFullName,
        this.battingRecordsList[7].playerFullName],
      datasets: [
        {
          label: 'Total Score',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',

          data: [
            this.battingRecordsList[0].runs,
            this.battingRecordsList[1].runs,
            this.battingRecordsList[2].runs,
            this.battingRecordsList[3].runs,
            this.battingRecordsList[4].runs,
            this.battingRecordsList[5].runs,
            this.battingRecordsList[6].runs,
            this.battingRecordsList[7].runs]

        }
      ]

    };
    this.dataAverage = {
      width: '92px',

      labels: [
        this.battingRecordsList[0].playerFullName,
        this.battingRecordsList[1].playerFullName,
        this.battingRecordsList[2].playerFullName,
        this.battingRecordsList[3].playerFullName,
        this.battingRecordsList[4].playerFullName,
        this.battingRecordsList[5].playerFullName,
        this.battingRecordsList[6].playerFullName,
        this.battingRecordsList[7].playerFullName],
      datasets: [
        {
          label: 'Players Average',
          backgroundColor: '#cc55ac',
          borderColor: '#2a4629',

          data: [
            this.battingRecordsList[0].average,
            this.battingRecordsList[1].average,
            this.battingRecordsList[2].average,
            this.battingRecordsList[3].average,
            this.battingRecordsList[4].average,
            this.battingRecordsList[5].average,
            this.battingRecordsList[6].average,
            this.battingRecordsList[7].average]

        }
      ]

    };


    console.log("request is completed");
    for (let record of records) {
      if (record.season_year >= this.previousFiveYear) {
        this.previousFiveYearsRecords.push(record);
      }
    }
    for (let record of records) {
      if (record.season_id === 31) {
        this.t20Records.push(record);
      } else if (record.season_id === 30) {
        this.t35Records.push(record);
      }
    }
  }

  updateDisplayData() {

    if (this.checkNum === 0 || this.checkNum === 3) {
      this.data = this.dataRuns;
      console.log("Inside =>:", this.checkNum);
      this.checkNum = 1;
    } else if (this.checkNum === 1) {
      this.data = this.dataMatches;
      console.log("Inside =>:", this.checkNum);
      this.checkNum = 2;
    } else if (this.checkNum === 2) {
      this.data = this.dataAverage;
      console.log("Inside =>:", this.checkNum);
      this.checkNum = 3;
    }
    else {
      this.data = this.dataRuns;
    }
  }

  showViaService() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }

  clear() {
    this.msgs = [];
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

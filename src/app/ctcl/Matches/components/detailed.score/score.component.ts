/* tslint:disable */
import {Component} from "@angular/core";
import {MatchesConstants} from "../matches.constant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject} from "rxjs/Subject";
import {MatchesService} from "../../../common/services/matches.service";

@Component({
  selector: 'score-view',
  templateUrl: './score.details.html',
  styleUrls: ['./score.scss'],
})

export class DetailedScoreComponent {

  batting_first_team: string;
  batting_second_team: string;

  batting_data: any[];
  bowling_data: any[];
  extras_score: any[];
  batting_data_1: any[];
  batting_data_2: any[];
  firstInnings_info: any[];
  score_card_info_1: any[];
  score_card_info_2: any[];
  queryParamsSub;
  gameId: string;

  bowling_data_1: any[];
  bowling_data_2: any[];
  dnb_data_1: any[];
  dnb_data_2: any[];

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private  router: Router,
              private route: ActivatedRoute,
              private _matchesService: MatchesService,
              private matchesConstants: MatchesConstants) {
    this.queryParamsSub = route.queryParams.takeUntil(this.ngUnsubscribe).subscribe(
      params => {
        this.gameId = params['gameId'];
      }
    );
  }

  ngOnInit(): void {
    //this.gameId === '2065' ? this.gameId = '2071' : this.gameId;
    this.getBowlingDetails$(this.gameId);
    this.getBattingDetails$(this.gameId);
    this.getBattingDetail(this.gameId);
    this.getBattingDetail_2(this.gameId);
    this.getExtrasDetails$(this.gameId);
    this.getScoreCardInfo_1(this.gameId);
    this.getScoreCardInfo_2(this.gameId);
    this.getBowlingDetail_1(this.gameId);
    this.getBowlingDetail_2(this.gameId);
    this.getDNBPlayers_1(this.gameId);
    this.getDNBPlayers_2(this.gameId);
  }

  /*getBattingDetails(gameId): any[] {
    console.info("Fetching results for batting details for game id :", gameId)
    this._matchesService.getBattingDetails(gameId).(res => this.batting_data = res);
    return this.batting_data;
  }*/

  getBowlingDetails(gameId) {
    console.info("Fetching results for batting details for game id :", gameId)
    const types$ = this._matchesService.getBowlingDetails(gameId);
    types$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.bowling_data = responce,
      (err) => console.error('matchesResult: Response Error =>', err),
      () => console.log("bowling_dataLoaded"));

  };

  getBattingDetails$(gameId) {
    const battiing$ = this._matchesService.loadBattingDetails(gameId);
    const firstInnings_info$ = battiing$.map(innings => innings[0]);
    battiing$.takeUntil(this.ngUnsubscribe)
      .subscribe(responce => this.batting_data = responce,
        () => console.log("In Controller: Load Bowling details call completed"));
    firstInnings_info$.takeUntil(this.ngUnsubscribe).subscribe(bat => this.firstInnings_info = bat,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => console.log("In Controller: Load Bowling details call completed"));
  }

  getBowlingDetails$(gameId) {
    const bowling$ = this._matchesService.loadBowlingDetails(gameId);
    bowling$.takeUntil(this.ngUnsubscribe)
      .subscribe(responce => this.bowling_data = responce,
        (err) => console.error('battingRecords: Response Error =>', err),
        () => console.log("In Controller: Load Bowling details call completed"));
  }

  getExtrasDetails$(gameId) {
    const extras$ = this._matchesService.loadExtrasDetails(gameId);
    extras$.takeUntil(this.ngUnsubscribe)
      .subscribe(responce => this.extras_score = responce,
        (err) => console.error('battingRecords: Response Error =>', err),
        () => console.log("In Controller: Load Bowling details call completed"));
  }


  getBattingDetail(gameId) {
    console.info("Fetching results for batting details for game id :", gameId);
    const result$ = this._matchesService.getBattingDetailsByInnings(gameId, 1);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.batting_data_1 = responce ,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.LoadedResult());
  }

  getBattingDetail_2(gameId) {
    console.info("Fetching results for batting details for game id :", gameId);
    const result$ = this._matchesService.getBattingDetailsByInnings(gameId, 2);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.batting_data_2 = responce ,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.LoadedResult());
  }
  getScoreCardInfo_1(gameId) {
    console.info("Fetching results for getScoreCardInfo for game id :", gameId);
    const result$ = this._matchesService.getScoreCardByInnings(gameId, 1);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.score_card_info_1 = responce ,
      (err) => console.error('getScoreCardInfo: Response Error =>', err),
      () => this.LoadedResultInfo(this.score_card_info_1));
  }

  getScoreCardInfo_2(gameId) {
    console.info("Fetching results for getScoreCardInfo for game id :", gameId);
    const result$ = this._matchesService.getScoreCardByInnings(gameId, 2);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.score_card_info_2 = responce ,
      (err) => console.error('getScoreCardInfo: Response Error =>', err),
      () => this.LoadedResult());
  }
  getBowlingDetail_1(gameId) {
    console.info("Fetching results for getBowlingDetail_1 for game id :", gameId);
    const result$ = this._matchesService.getBowlingDetail(gameId, 1);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.bowling_data_1 = responce ,
      (err) => console.error('getBowlingDetail_1: Response Error =>', err),
      () => this.LoadedResult());
  }
  getBowlingDetail_2(gameId) {
    console.info("Fetching results for getBowlingDetail_2 for game id :", gameId);
    const result$ = this._matchesService.getBowlingDetail(gameId, 2);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.bowling_data_2 = responce ,
      (err) => console.error('getBowlingDetail_2: Response Error =>', err),
      () => this.LoadedResult());
  }

  getDNBPlayers_1(gameId) {
    console.info("Fetching results for getDNBPlayers_1 for game id :", gameId);
    const result$ = this._matchesService.getDNBPlayers(gameId, 1);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.dnb_data_1 = responce ,
      (err) => console.error('getDNBPlayers_1: Response Error =>', err),
      () => this.LoadedResult());
  }
  getDNBPlayers_2(gameId) {
    console.info("Fetching results for getDNBPlayers_2 for game id :", gameId);
    const result$ = this._matchesService.getDNBPlayers(gameId, 2);
    result$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.dnb_data_2 = responce ,
      (err) => console.error('getDNBPlayers_2: Response Error =>', err),
      () => this.LoadedResult());
  }

  LoadedResult(){
    console.info("Request score card of gameId: "+this.gameId+" is completed");
  }
  LoadedResultInfo(value){
    this.batting_first_team = value[0].bat_first_team;
    this.batting_second_team = value[0].bat_second_team;
    console.info("value =>: ",value[0]);
  }
  ngOnDestory() {
    this.queryParamsSub.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

  }

}

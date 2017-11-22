/* tslint:disable */
import {ClubsService} from '../../common/services/clubs.service';
import {ChangeDetectorRef, Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LiveScoreConstants} from "../../common/services/live-score-constants.service";
import {LiveScoreService} from '../../common/services/live-score.service';
import {DatePipe} from '@angular/common';
import {hexToRgb} from "@swimlane/ngx-charts/release/utils";
import {Subject} from 'rxjs';

@Component({
  selector: 'ctcl-live-score',
  templateUrl: 'live-score.component.html',
  styleUrls: ['./live-score.component.scss'],
})

export class LiveScoreComponent {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  scoreForm: FormGroup;
  batsman_1: FormGroup;

  batsman_list: any[];
  active_grounds: any;
  fielder_list: any[];
  runs_typs: any[];
  out_types: any[];
  extras_types: any[];
  data: any;
  test: any;
  selection: any;
  refreshScoreInputs: any[] = [];

  /**** Start:******   Current/Default Fields values **/
  current_batsman_1 = "Zulifqar Ahmad";
  current_batsman_2 = "Muhmmad Zubair";
  current_fielder = "Awais Nunu";
  current_bowler = "Wasim Akram";
  current_extras_type = 'Select Extras Type';
  current_out_type = 'Select Out Type';
  is_submitted: boolean = true;
  is_batsman_out: boolean = false;
  is_striker_1: boolean = true;
  is_striker_2: boolean = false;
  is_update_score: boolean = false;


  /**** End :******   Current/Default Fields values **/
  //Output Responce
  scoreForm_output: any;




  batsman: any;


  constructor(private fb: FormBuilder,
    private liveScoreConstants: LiveScoreConstants,
    private liveScoreService: LiveScoreService,
    private clubsService: ClubsService,
    private datePipe: DatePipe,
    private cdRef: ChangeDetectorRef) {
    this.createForm();
    this.initiateData();
    this.batsman_list = ['Basit', 'Wasim Akram', 'Majid', 'Zulifqar Ahmad', 'Sohail', 'Muhmmad Zubair'];
    this.fielder_list = ['Zubair', 'Adnan', 'Awais Nunu'];

  }

  initiateData() {
    this.getActiveGrounds()
    this.runs_typs = this.liveScoreConstants.runs_types;
    this.out_types = this.liveScoreConstants.out_types;
    this.extras_types = this.liveScoreConstants.extras_types;
    this.scoreForm.patchValue({match: {overs: 'Overs: 00.00'}});
    this.scoreForm.patchValue({match: {score: 'Score: 000'}});
    this.scoreForm.patchValue({match: {wickets: 'Wickets: 00'}});

  };


  createForm() {
    this.scoreForm = this.fb.group({ // <-- the parent FormGroup
      id: '',
      innings: '',
      ground: '',
      batting_team: '',
      current_ball_runs: '',
      is_batsman_out: '',
      extras_types: '',
      live_game_id: '',
      match: this.fb.group(this.liveScoreConstants.match_object),
      batsman_1: this.fb.group(this.liveScoreConstants.batsman_object),
      batsman_2: this.fb.group(this.liveScoreConstants.batsman_object),
      bowler: this.fb.group(this.liveScoreConstants.bowler_object),
      wicket: this.fb.group(this.liveScoreConstants.wicket_info_object),

    });

  }

  updateFieldFlags(checkVal) {
    if (checkVal === 'out') {
      this.is_batsman_out = !this.scoreForm.get('is_batsman_out').value;
    }
  }

  UpdateStriker() {
    this.is_striker_1 = !this.is_striker_1;
    this.is_striker_2 = !this.is_striker_2;
  }

  updateScore() {
    this.is_update_score = true;
  }

  syncNetScoreDetails() {
    this.data = [
      {
        "score": this.scoreForm.get(['match', 'score']).value,
        "runs": this.scoreForm.get(['match', 'score']).value,
        "wickets": this.scoreForm.get(['wicket', 'wicket_number']).value
      }
    ];
  }

  updateNetScore(val) {
    this.is_submitted = false;
    console.log("val: ", val);
  }
  onRowClick(e: any) {
    this.selection = e.data;
  }
  updateScoreObject() {
    let isOut = this.scoreForm.get('is_batsman_out').value;
    if (isOut) {
      this._wicketInfo();
    }

    let extrasType = (this.scoreForm.get('extras_types').value);
    if (extrasType === 'Select Extras Type') {
      this._normalBallScoring();
    } else if (extrasType === 'Wide' || extrasType === 'No Ball') {
      this._bowlersExtras(extrasType);
    } else {
      this._matchExtras(extrasType);
    }
    this.reconsileScoreForm(this.scoreForm.value);
    this.syncNetScoreDetails();

  }

  updateBatsmanObject() {

  }

  updateBowlerObject(extrasVal) {

    if (extrasVal === 'wide') {
      this.scoreForm.patchValue({batsman_1: {bats_balls: this.scoreForm.get('current_ball_runs').value, }});
      this.scoreForm.patchValue({bowler: {bowler_runs_current_ball: this.scoreForm.get('current_ball_runs').value}});

    }

  }

  _normalBallScoring() {

    let curent_ball_runs = this.scoreForm.get('current_ball_runs').value;

    //Match: Balls && Overs
    let _matchBalls = this.scoreForm.get(['match', 'balls']).value;
    this.scoreForm.patchValue({match: {balls: this.liveScoreConstants.convertBallsToOvers(_matchBalls).balls}});
    this.scoreForm.patchValue({match: {overs: this.liveScoreConstants.convertBallsToOvers(_matchBalls).overs}});


    //Match: Score
    let currentMatchScore = this.scoreForm.get(['match', 'score']).value;
    this.scoreForm.patchValue({match: {score: +currentMatchScore + +curent_ball_runs}});

    //Batsman: Balls && Overs
    let _batsmanBalls = this.scoreForm.get(['batsman_1', 'balls']).value;
    this.scoreForm.patchValue({batsman_1: {balls: this.liveScoreConstants.convertBallsToOvers(_batsmanBalls).balls}});
    this.scoreForm.patchValue({batsman_1: {overs: this.liveScoreConstants.convertBallsToOvers(_batsmanBalls).overs}});

    //Batsman: Score
    let _batsmanScore = this.scoreForm.get(['batsman_1', 'score']).value;
    this.scoreForm.patchValue({batsman_1: {score: +_batsmanScore + +curent_ball_runs}});

    //Bowler: Balls && Overs
    let _bowlerBalls = this.scoreForm.get(['bowler', 'balls']).value;
    this.scoreForm.patchValue({bowler: {balls: this.liveScoreConstants.convertBallsToOvers(_bowlerBalls).balls}});
    this.scoreForm.patchValue({bowler: {overs: this.liveScoreConstants.convertBallsToOvers(_bowlerBalls).overs}});

    //Bowler: Score
    let _bowlerScore = this.scoreForm.get(['bowler', 'score']).value;
    this.scoreForm.patchValue({bowler: {score: +_bowlerScore + +curent_ball_runs}});


    //Boundary
    if (curent_ball_runs === '4') {
      this.scoreForm.patchValue({match: {fours: +this.scoreForm.get(['match', 'fours']).value + +1}});
      this.scoreForm.patchValue({batsman_1: {fours: +this.scoreForm.get(['batsman_1', 'fours']).value + +1}});
      this.scoreForm.patchValue({bowler: {fours: +this.scoreForm.get(['bowler', 'fours']).value + +1}});
    } else if (curent_ball_runs === '6') {
      this.scoreForm.patchValue({match: {sixes: +this.scoreForm.get(['match', 'sixes']).value + +1}});
      this.scoreForm.patchValue({batsman_1: {sixes: +this.scoreForm.get(['batsman_1', 'sixes']).value + +1}});
      this.scoreForm.patchValue({bowler: {sixes: +this.scoreForm.get(['bowler', 'sixes']).value + +1}});
    }
  }

  _bowlersExtras(extrasType) {
    let curent_ball_runs = this.scoreForm.get('current_ball_runs').value;
    //Match
    let currentMatchScore = this.scoreForm.get(['match', 'score']).value;
    this.scoreForm.patchValue({match: {score: +currentMatchScore + +curent_ball_runs}});

    //Bowler
    let _bowlerScore = this.scoreForm.get(['bowler', 'score']).value;
    this.scoreForm.patchValue({bowler: {score: +_bowlerScore + +curent_ball_runs}});

    if (extrasType === 'Wide') {
      this.scoreForm.patchValue({match: {wides: +this.scoreForm.get(['match', 'wides']).value + +1}});
      this.scoreForm.patchValue({bowler: {wides: +this.scoreForm.get(['bowler', 'wides']).value + +1}});
    }
    if (extrasType === 'No Ball') {
      this.scoreForm.patchValue({match: {noballs: +this.scoreForm.get(['match', 'noballs']).value + +1}});
      this.scoreForm.patchValue({bowler: {noballs: +this.scoreForm.get(['bowler', 'noballs']).value + +1}});
    }
  }

  _matchExtras(extrasType) {

    //Match: score
    let curent_ball_runs = this.scoreForm.get('current_ball_runs').value;
    let currentMatchScore = this.scoreForm.get(['match', 'score']).value;
    this.scoreForm.patchValue({match: {score: +currentMatchScore + +curent_ball_runs}});

    //Match: Balls && Overs
    let _matchBalls = this.scoreForm.get(['match', 'balls']).value;
    this.scoreForm.patchValue({match: {balls: this.liveScoreConstants.convertBallsToOvers(_matchBalls).balls}});
    this.scoreForm.patchValue({match: {overs: this.liveScoreConstants.convertBallsToOvers(_matchBalls).overs}});

    //Batsman: Balls && Overs
    let _batsmanBalls = this.scoreForm.get(['batsman_1', 'balls']).value;
    this.scoreForm.patchValue({batsman_1: {balls: this.liveScoreConstants.convertBallsToOvers(_batsmanBalls).balls}});
    this.scoreForm.patchValue({batsman_1: {overs: this.liveScoreConstants.convertBallsToOvers(_batsmanBalls).overs}});

    //Bowler: Balls && Overs
    let _bowlerBalls = this.scoreForm.get(['bowler', 'balls']).value;
    this.scoreForm.patchValue({bowler: {balls: this.liveScoreConstants.convertBallsToOvers(_bowlerBalls).balls}});
    this.scoreForm.patchValue({bowler: {overs: this.liveScoreConstants.convertBallsToOvers(_bowlerBalls).overs}});


    if (extrasType === 'Byes') {
      this.scoreForm.patchValue({match: {byes: +this.scoreForm.get(['match', 'byes']).value + +curent_ball_runs}});
    } else if (extrasType === 'leg Byes') {
      this.scoreForm.patchValue({match: {legByes: +this.scoreForm.get(['match', 'legByes']).value + +curent_ball_runs}});
    }

  }

  _wicketInfo() {
    this.scoreForm.patchValue({wicket: {wicket_number: +this.scoreForm.get(['wicket', 'wicket_number']).value + +1}});
    this.scoreForm.patchValue({wicket: {bowler_name: this.scoreForm.get(['bowler', 'name']).value}});
    this.scoreForm.patchValue({wicket: {batsman_name: this.scoreForm.get(['batsman_1', 'name']).value}});
    let currentMatchScore = this.scoreForm.get(['match', 'score']).value;
    this.scoreForm.patchValue({wicket: {fow_score: currentMatchScore}});
  }


  reconsileScoreForm(scoreFrom_input) {

    console.info("ReconsileForm Rquest this.scoreForm_output: ", this.scoreForm_output);
    this.refreshScoreInputs = [{
      live_game_id: 'gameId',
      batsman_1: 1,
      batsman_2: 2,

    }];
    console.info("ReconsileForm Rquest this.refreshScoreInputs: ", this.refreshScoreInputs);
    const form$ = this.liveScoreService.reconsileScoreForm("RRCC-11142017", 1, 2);

    form$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.scoreForm_output = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => this.reconsildeResponce(this.scoreForm_output));
  }

  getActiveGrounds() {
    const form$ = this.clubsService.getCtclGrounds();
    form$.takeUntil(this.ngUnsubscribe).subscribe(responce => this.active_grounds = responce,
      (err) => console.error('battingRecords: Response Error =>', err),
      () => console.info("active grounds: ", this.active_grounds));
  }

  reconsildeResponce(val) {
    console.log("Reconsile request Responce: ", val)
  }

  loadLiveScore() {
    console.log("YES I AM");
    var date = this.datePipe.transform(new Date(), 'MMddyy');
    let tem = this.scoreForm.get('ground').value + '-' + date;
    console.log("The Date time -->" + tem);
  }
  //after change issue fix
  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
}

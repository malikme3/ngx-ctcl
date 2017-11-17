/* tslint:disable */
import {ChangeDetectorRef, Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LiveScoreConstants} from "../../common/services/live-score-constants.service";
import {hexToRgb} from "@swimlane/ngx-charts/release/utils";

@Component({
  selector: 'ctcl-live-score',
  templateUrl: 'live-score.component.html',
  styleUrls: ['./live-score.component.scss'],
})

export class LiveScoreComponent {
  scoreForm: FormGroup;
  batsman_1: FormGroup;

  batsman_list: any[];
  fielder_list: any[];
  runs_typs: any[];
  out_types: any[];
  extras_types: any[];

  /**** Start:******   Current/Default Fields values **/
  current_batsman_1 = "Zulifqar Ahmad";
  current_batsman_2 = "Muhmmad Zubair";
  current_fielder = "Awais Nunu";
  current_bowler = "Wasim Akram";
  current_extras_type = 'Select Extras Type';
  current_out_type = 'Select Out Type';
  is_batsman_out: boolean = false;
  is_striker_1: boolean = true;
  is_striker_2: boolean = false;


  /**** End :******   Current/Default Fields values **/



  batsman: any;


  constructor (private fb: FormBuilder, private  liveScoreConstants: LiveScoreConstants, private cdRef: ChangeDetectorRef) {
    this.createForm();
    this.initiateData();
    this.batsman_list = ['Basit', 'Wasim Akram', 'Majid', 'Zulifqar Ahmad', 'Sohail', 'Muhmmad Zubair'];
    this.fielder_list = ['Zubair', 'Adnan', 'Awais Nunu'];

  }

  initiateData () {

    this.runs_typs = this.liveScoreConstants.runs_types;
    this.out_types = this.liveScoreConstants.out_types;
    this.extras_types = this.liveScoreConstants.extras_types;
    this.scoreForm.patchValue({match_info: {overs: 0.00}});
    this.scoreForm.patchValue({match_info: {score: 0.00}});
    this.scoreForm.patchValue({match_info: {wickets: 0.00}});
  };

  createForm () {
    this.scoreForm = this.fb.group({ // <-- the parent FormGroup
      current_ball_runs: '',
      is_batsman_out: '',
      extras_types: '',
      match_info: this.fb.group(this.liveScoreConstants.match_object),
      batsman_1: this.fb.group(this.liveScoreConstants.batsman_object),
      batsman_2: this.fb.group(this.liveScoreConstants.batsman_object),
      bowler: this.fb.group(this.liveScoreConstants.bowler_object),
      wicket_info: this.fb.group(this.liveScoreConstants.wicket_info_object),

    });

  }

  updateFieldFlags (checkVal) {
    if (checkVal === 'out') {
      this.is_batsman_out = !this.scoreForm.get('is_batsman_out').value;
    }
  }

  UpdateStriker (checkVal) {
    this.is_striker_1 = !this.is_striker_1;
    this.is_striker_2 = !this.is_striker_2;
  }

  updateScoreObject () {

    this.scoreForm.patchValue({batsman_2: {guest_team: 'Hawks'}});
    let extrasType = (this.scoreForm.get('extras_types').value);
    if (extrasType === 'Select Extras Type') {
      this._normalBallScoring();
    } else if (extrasType === 'Wide' || extrasType === 'No Ball') {
      this._bowlersExtras(extrasType);
    } else {
      this._matchExtras(extrasType);
    }
  }

  updateBatsmanObject () {

  }

  updateBowlerObject (extrasVal) {

    if (extrasVal === 'wide') {
      this.scoreForm.patchValue({batsman_1: {bats_balls: this.scoreForm.get('current_ball_runs').value,}});
      this.scoreForm.patchValue({bowler: {bowler_runs_current_ball: this.scoreForm.get('current_ball_runs').value}});

    }

  }

  _normalBallScoring () {

    let curent_ball_runs = this.scoreForm.get('current_ball_runs').value;

    //Match: Balls && Overs
    let _matchBalls = this.scoreForm.get(['match_info', 'balls']).value;
    this.scoreForm.patchValue({match_info: {balls: this.liveScoreConstants.convertBallsToOvers(_matchBalls).balls}});
    this.scoreForm.patchValue({match_info: {overs: this.liveScoreConstants.convertBallsToOvers(_matchBalls).overs}});


    //Match: Score
    let currentMatchScore = this.scoreForm.get(['match_info', 'score']).value;
    this.scoreForm.patchValue({match_info: {score: +currentMatchScore + +curent_ball_runs}});

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
      this.scoreForm.patchValue({match_info: {fours: +this.scoreForm.get(['match_info', 'fours']).value + +1}});
      this.scoreForm.patchValue({batsman_1: {fours: +this.scoreForm.get(['batsman_1', 'fours']).value + +1}});
      this.scoreForm.patchValue({bowler: {fours: +this.scoreForm.get(['bowler', 'fours']).value + +1}});
    } else if (curent_ball_runs === '6') {
      this.scoreForm.patchValue({match_info: {sixes: +this.scoreForm.get(['match_info', 'sixes']).value + +1}});
      this.scoreForm.patchValue({batsman_1: {sixes: +this.scoreForm.get(['batsman_1', 'sixes']).value + +1}});
      this.scoreForm.patchValue({bowler: {sixes: +this.scoreForm.get(['bowler', 'sixes']).value + +1}});
    }
  }

  _bowlersExtras (extrasType) {
    let curent_ball_runs = this.scoreForm.get('current_ball_runs').value;
    //Match
    let currentMatchScore = this.scoreForm.get(['match_info', 'score']).value;
    this.scoreForm.patchValue({match_info: {score: +currentMatchScore + +curent_ball_runs}});

    //Bowler
    let _bowlerScore = this.scoreForm.get(['bowler', 'score']).value;
    this.scoreForm.patchValue({bowler: {score: +_bowlerScore + +curent_ball_runs}});

    if (extrasType === 'Wide') {
      this.scoreForm.patchValue({match_info: {wides: +this.scoreForm.get(['match_info', 'wides']).value + +1}});
      this.scoreForm.patchValue({bowler: {wides: +this.scoreForm.get(['bowler', 'wides']).value + +1}});
    }
    if (extrasType === 'No Ball') {
      this.scoreForm.patchValue({match_info: {noballs: +this.scoreForm.get(['match_info', 'noballs']).value + +1}});
      this.scoreForm.patchValue({bowler: {noballs: +this.scoreForm.get(['bowler', 'noballs']).value + +1}});
    }
  }

  _matchExtras (extrasType) {

    //Match: score
    let curent_ball_runs = this.scoreForm.get('current_ball_runs').value;
    let currentMatchScore = this.scoreForm.get(['match_info', 'score']).value;
    this.scoreForm.patchValue({match_info: {score: +currentMatchScore + +curent_ball_runs}});

    //Match: Balls && Overs
    let _matchBalls = this.scoreForm.get(['match_info', 'balls']).value;
    this.scoreForm.patchValue({match_info: {balls: this.liveScoreConstants.convertBallsToOvers(_matchBalls).balls}});
    this.scoreForm.patchValue({match_info: {overs: this.liveScoreConstants.convertBallsToOvers(_matchBalls).overs}});

    //Batsman: Balls && Overs
    let _batsmanBalls = this.scoreForm.get(['batsman_1', 'balls']).value;
    this.scoreForm.patchValue({batsman_1: {balls: this.liveScoreConstants.convertBallsToOvers(_batsmanBalls).balls}});
    this.scoreForm.patchValue({batsman_1: {overs: this.liveScoreConstants.convertBallsToOvers(_batsmanBalls).overs}});

    //Bowler: Balls && Overs
    let _bowlerBalls = this.scoreForm.get(['bowler', 'balls']).value;
    this.scoreForm.patchValue({bowler: {balls: this.liveScoreConstants.convertBallsToOvers(_bowlerBalls).balls}});
    this.scoreForm.patchValue({bowler: {overs: this.liveScoreConstants.convertBallsToOvers(_bowlerBalls).overs}});


    if (extrasType === 'Byes') {
      this.scoreForm.patchValue({match_info: {byes: +this.scoreForm.get(['match_info', 'byes']).value + +curent_ball_runs}});
    } else if (extrasType === 'leg Byes') {
      this.scoreForm.patchValue({match_info: {legByes: +this.scoreForm.get(['match_info', 'legByes']).value + +curent_ball_runs}});
    }

  }

  //after change issue fix
  ngAfterViewInit () {
    this.cdRef.detectChanges();
  }
}

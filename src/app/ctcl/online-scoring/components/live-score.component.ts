/* tslint:disable */
import {Component} from "@angular/core";
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
  runs_typs: any[];
  out_types: any[];
  extras_types: any[];
  /**** Start:******   Current/Default Fields values **/
  current_batsman_1 = "Zulifqar Ahmad";
  current_batsman_2 = "Muhmmad Zubair";
  current_bowler = "Wasim Akram";
  over_current_ball: any;
  current_ball = '0';
  current_extras_type = 'Select Extras Type';
  current_out_type = 'Select Out Type';

  /**** End :******   Current/Default Fields values **/



  batsman: any;


  constructor (private fb: FormBuilder, private  liveScoreConstants: LiveScoreConstants) {
    this.createForm();
    this.initiateData();
    this.batsman_list = ['Basit', 'Wasim Akram', 'Majid', 'Zulifqar Ahmad', 'Sohail', 'Muhmmad Zubair'];

  }

  initiateData () {

    this.runs_typs = this.liveScoreConstants.runs_types;
    this.out_types = this.liveScoreConstants.out_types;
    this.extras_types = this.liveScoreConstants.extras_types;

    //Batsmans
    this.scoreForm.patchValue({batsman_1: {bats_balls: 0}});
    this.scoreForm.patchValue({batsman_1: {bats_runs: 0}});
    //Bowler
    this.scoreForm.patchValue({bowler: {bowler_runs: 0}});
    this.scoreForm.patchValue({bowler: {bowler_overs: 0.00}});

    //Match adding score every @ per ball
    this.scoreForm.patchValue({match_running_total_balls: 0.00});
    this.scoreForm.patchValue({match_running_score: 0});
  };

  createForm () {
    this.scoreForm = this.fb.group({ // <-- the parent FormGroup
      current_ball_runs:'',
      extras_types:'',
      match_info: this.fb.group(this.liveScoreConstants.match_object),
      batsman_1: this.fb.group(this.liveScoreConstants.batsman_oject),
      batsman_2: this.fb.group(this.liveScoreConstants.batsman_oject),
      bowler: this.fb.group(this.liveScoreConstants.bowler_object),
      wicket_info: this.fb.group(this.liveScoreConstants.wicket_info_object),

    });

  }

  checkForomVal () {
    console.log(" Form Value ", this.scoreForm);

  }

  updateScoreObject () {

    this.scoreForm.patchValue({batsman_2: {guest_team: 'Hawks'}});


    let extrasType = (this.scoreForm.get('extras_types').value);
    if (extrasType === 'Select Extras Type') {
      this._normalBallScoring();
    } else if (extrasType === 'wide' || extrasType === 'No Ball') {
      this._bowlersExtras(extrasType);
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
    let currentBallScore = this.scoreForm.get('current_ball_runs').value;

    /********* Match adding score every @ per ball ***/
    let currentMatchOver = this.scoreForm.get('match_running_overs').value;
    this.scoreForm.patchValue({match_running_overs: this.liveScoreConstants.ballsToOvers(currentMatchOver)});
    let currentMatchScore = this.scoreForm.get('match_running_score').value;
    this.scoreForm.patchValue({match_running_score: +currentMatchScore + +currentBallScore});
    let currentMatchBalls = this.scoreForm.get('match_running_total_balls').value;
    this.scoreForm.patchValue({match_running_total_balls: +currentMatchBalls + +1});

    /***** Batsmans ****/
    let currentBatsmanScore = this.scoreForm.get(['batsman_1', 'bats_runs']).value;
    let currentBatsmanBalls = this.scoreForm.get(['batsman_1', 'bats_balls']).value;
    this.scoreForm.patchValue({batsman_1: {bats_balls: +currentBatsmanBalls + +1}});
    this.scoreForm.patchValue({batsman_1: {bats_runs: +currentBatsmanScore + +currentBallScore}});

    /***** Bowler ****/
    let currentBowlerScore = this.scoreForm.get(['bowler', 'bowler_runs']).value;
    this.scoreForm.patchValue({bowler: {bowler_runs: +currentBowlerScore + +currentBallScore}});
    let currentBowlerOver = this.scoreForm.get(['bowler', 'bowler_overs']).value;
    this.scoreForm.patchValue({bowler: {bowler_overs: this.liveScoreConstants.ballsToOvers(currentBowlerOver)}});
  }

  _bowlersExtras (extrasType) {
    let currentBallScore = this.scoreForm.get('current_ball_runs').value;
    //Match
    let currentMatchScore = this.scoreForm.get('match_running_score').value;
    this.scoreForm.patchValue({match_running_score: +currentMatchScore + +currentBallScore});
    //Bowler
    let currentBowlerScore = this.scoreForm.get(['bowler', 'bowler_runs']).value;

    if (extrasType === 'wide') {
      this.scoreForm.patchValue({bowler: {bowler_runs: +currentBowlerScore + +currentBallScore}});
      let currentBowlerWides = this.scoreForm.get(['bowler', 'bowler_wides']).value;
      this.scoreForm.patchValue({bowler: {bowler_wides: +currentBowlerWides + +currentBallScore}});
    }
    if (extrasType === 'No Ball') {
      let currentBowlerNoballs = this.scoreForm.get(['bowler', 'bowler_no_ball']).value;
      this.scoreForm.patchValue({bowler: {bowler_runs: +currentBowlerScore + +1}});
      this.scoreForm.patchValue({bowler: {bowler_no_ball: +currentBowlerNoballs + +1}});
    }

    //extras
    let currentMatchExtras = this.scoreForm.get('match_extras_score').value;
    this.scoreForm.patchValue({match_extras_score: +currentMatchExtras + +currentBallScore});
  }

}

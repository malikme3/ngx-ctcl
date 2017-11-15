/* tslint:disable */
import {Component} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LiveScoreConstants} from "../../common/services/live-score-constants.service";

@Component({
  selector: 'ctcl-live-score',
  templateUrl: 'live-score.component.html',
  styleUrls: ['./live-score.component.scss'],
})

export class LiveScoreComponent {
  scoreForm: FormGroup;

  batsman_list: any[];
  runs_typs: any[];
  out_types: any[];
  extras_types: any[];
  /**** Start:******   Current/Default Fields values **/
  current_batsman_1 = "Zulifqar Ahmad";
  current_batsman_2 = "Muhmmad Zubair";
  current_bowler = "Wasim Akram";
  current_ball = '0';
  current_extras_type = 'Select Extras Type';
  current_out_type = 'Select Out Type';

  /**** End :******   Current/Default Fields values **/



  batsman: any;


  constructor(private fb: FormBuilder, private  liveScoreConstants: LiveScoreConstants) {
    this.createForm();
    this.initiateData();
    this.batsman_list = ['Basit', 'Wasim Akram', 'Majid', 'Zulifqar Ahmad', 'Sohail', 'Muhmmad Zubair'];

  }

  initiateData() {
    this.runs_typs = this.liveScoreConstants.runs_types;
    this.out_types = this.liveScoreConstants.out_types;
    this.extras_types = this.liveScoreConstants.extras_types;
  };

  createForm() {
    this.scoreForm = this.fb.group({ // <-- the parent FormGroup
      innings: '',
      team_batting: '',
      max_overs: '',
      match_running_over:'',
      match_running_score:'',
      match_running_wickets:'',
      match_score: '',
      runs_per_ball: '',
      extras_types: '',
      out_types: '',
      out_assist_fielder: '',

      batsman_1: this.fb.group({ // <-- the child FormGroup
        bats_name: '',
        bats_score: '',
        bats_balls: '',
        bats_fours: '',
        bats_sixes: ''
      }),

      batsman_2: this.fb.group({ // <-- the child FormGroup
        bats_name: '',
        bats_score: '',
        bats_balls: '',
        bats_fours: '',
        bats_sixes: ''
      }),
      bowler: this.fb.group({
        bowler_name: '',
        bowler_runs: '',
        bowler_overs: '',
        bowler_wickets: '',
        bowler_maidens: ''
      })


    });

    this.scoreForm.patchValue({
      max_overs: '20',
      team_batting: 'Lions',
      match_score: '10',
      match_running_over:'0.00',
      match_running_score:'0.00',
      match_running_wickets:'0.00',

    });
  }

  checkForomVal() {
    console.log("Form Value ", this.scoreForm);
  }


}

import {Injectable} from '@angular/core';

/**
 * Created by HudaZulifqar on 11/12/2017.
 */
@Injectable()
export class LiveScoreConstants {
  ball: number;
  runs_types = ['0', '1', '2', '3', '4', '6'];
  extras_types = ['Select Extras Type', 'Wide', 'No Ball', 'Byes', 'leg Byes', 'Other'];
  out_types = ['Select Out Type', 'Caught', 'Bowled', 'Run Out', 'Stumped', 'C & B', 'Other'];

  math_info_object = {
    id: '',
    home_team: '',
    guest_team: '',
    innings: '',
    ground_id: '',
    match_date: '',
    match_key: '',
    toss_won_id: '',
    max_overs: '',
    match_type: '',
    target: '',
  };
  batsman_oject = {
    id: '',
    name: '',
    position: '',
    score: '',
    balls: '',
    fours: '',
    sixes: '',
  };
  match_object = {
    score: '',
    overs: '',
    wickets: '',
    fours: '',
    sixes: '',
    wides: '',
    noballs: '',
    byes: '',
    legByes: '',
  };
  bowler_object = {
    id: '',
    name: '',
    position: '',
    score: '',
    overs: '',
    fours: '',
    sixes: '',
    wides: '',
    noballs: '',
  };

  wicket_info_object = {
    wicket_number: '',
    batsman_name: '',
    bowler_name: '',
    fielder_name: '',
    fow_score: '',
    how_out: '',

  };

  oversToBalls (overs): number {
    const balls = Math.round(overs) * 6;
    return balls;
  }

  addBallsToOvers (over): number {
    this.ball = 1;
    let current_over = (over * 10 + 0.1 * 10) / 10;
    if (this.ball === 6) {
      current_over = Math.round(current_over);
      this.ball = 0;
    }
    return current_over;
  }


  convertBallsToOvers (balls: number): number {
    if (balls > 0) {
      return Math.floor(balls / 6) + (balls % 6) / 10;
    } else {
      return 0.1;
    }
  }
}

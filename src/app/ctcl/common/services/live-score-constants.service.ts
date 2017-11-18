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

  math_start_info = {
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
  batsman_object = {
    id: '',
    name: '',
    position: '',
    is_striker: '',
    balls: '',
    overs: '',
    score: '',
    fours: '',
    sixes: '',
  };
  match_object = {
    score: '',
    balls: '',
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
    balls: '',
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

  addBallsToOvers (ballsPlayed): any {
    let balls = +ballsPlayed + +1;
    let current_over = (balls * 10 + 0.1 * 10) / 10;
    if (balls === 6) {
      current_over = Math.round(current_over);
      balls = 0;
    }
    return {current_over, balls};
  }


  convertBallsToOvers (ballsPlayed: number): any {
    const balls = +ballsPlayed + +1;
    const overs = Math.floor(balls / 6) + (balls % 6) / 10;
    return {overs, balls};
  }
}

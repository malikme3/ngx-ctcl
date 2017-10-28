/**
 * Created by HudaZulifqar on 6/28/2017.
 */
/* tslint:disable */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ServicesConstants} from "./constants.services";

@Injectable()
export class MatchesService {

  constructor(private http: Http, private pagesConstants: ServicesConstants) {
  }

  private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  private sch_path = 'matches/schedule/?';
  private batting_path = 'detailed/scorecard/batting/?';
  private bowling_path = 'detailed/scorecard/bowling/?';
  private extras_path = 'detailed/scorecard/extras/?';
  private teams_list = '/teams/namue/list';
  private players_list = '/submit/score/players?';
  private playersByIds = '/teams/players/teamsIds';
  private findMatch = 'findMatchByPlayingTeamsAndDate?';
  private howOutType = '/submit/score/howout';
  private scorecard_game_details = '/submit/score/scorecardGameDetails';
  private score_batting_details = 'updateScorecardBattingDetailss';
  private score_bowling_details = 'updateScorecardBowlingDetails';
  private score_fow_details = 'updateScorecardFowDetails';
  private score_extras_details = 'updateScorecardExtrasDetails';
  private score_totals_details = 'updateScorecardTotalDetails';
  private scorecard_batting = '/scorecard/battingByInnings?';
  private scorecard_bowling = '/scorecard/bowlingByInnings?';
  private scorecard_info = '/scorecard/scorcardInfoByInnings?';
  private scorecard_dnb = '/scorecard/dnbByInnings?';


  private schduel_url = this.baseUrl + this.sch_path;
  private batting_url = this.baseUrl + this.batting_path;
  private bowling_url = this.baseUrl + this.bowling_path;
  private extras_url = this.baseUrl + this.extras_path;
  private teams_url = this.baseUrl + this.teams_list;
  private players_url = this.baseUrl + this.players_list;
  private playersByIds_url = this.baseUrl + this.playersByIds;
  private findMatch_url = this.baseUrl + this.findMatch;
  private howOutType_url = this.baseUrl + this.howOutType;
  private scorecard_game_details_url = this.baseUrl + this.scorecard_game_details;
  private score_batting_details_url = this.baseUrl + this.score_batting_details;
  private score_bowling_details_url = this.baseUrl + this.score_bowling_details;
  private score_fow_details_url = this.baseUrl + this.score_fow_details;
  private score_extras_details_url = this.baseUrl + this.score_extras_details;
  private score_totals_details_url = this.baseUrl + this.score_totals_details;
  private scorecard_batting_url = this.baseUrl + this.scorecard_batting;
  private scorecard_bowling_url = this.baseUrl + this.scorecard_bowling;
  private scorecard_dnb_url = this.baseUrl + this.scorecard_dnb;
  private scorecard_info_url = this.baseUrl + this.scorecard_info;

  // For points table
  getSchedule(seasonId: string): Observable<any> {

    const url = `${this.schduel_url}seasonId=${seasonId}`;
    console.info("Call for getSchedule() with url : ", url);
    return this.http.get(url, this.header).map(res => res.json())
      .catch(this.handleError);
  }

  getBattingDetails(gameId: string): Observable<any> {
    const url = `${this.batting_url}gameId=${gameId}`;
    console.info("Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getBattingDetailsByInnings(gameId: number, inning): Observable<any> {
    const url = `${this.scorecard_batting_url}gameId=${gameId}&inning=${inning}`;
    console.info("Call for getBattingDetailsByInnings() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getBowlingDetail(gameId: number, inning): Observable<any> {
    const url = `${this.scorecard_bowling_url}gameId=${gameId}&inning=${inning}`;
    console.info("Call for getBattingDetailsByInnings() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getDNBPlayers(gameId: number, inning): Observable<any> {
    const url = `${this.scorecard_dnb_url}gameId=${gameId}&inning=${inning}`;
    console.info("Call for getBattingDetailsByInnings() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getScoreCardByInnings(gameId: number, inning): Observable<any> {
    const url = `${this.scorecard_info_url}gameId=${gameId}&inning=${inning}`;
    console.info("Call for getScoreCardByInnings() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getBowlingDetails(gameId: string): Observable<any> {
    const url = `${this.bowling_url}gameId=${gameId}`;
    console.info("Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getTeamslist(): Observable<any> {
    const url = this.baseUrl + this.teams_list;
    console.info("Call for getTeamList() with url : ", url);
    return this.http.get(this.teams_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getPlayerslist(): Observable<any> {
    console.info("Call for getPlayerslist() with url : ", this.players_url);
    return this.http.get(this.players_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getPlayersByTeamsIds(teamIds): Observable<any> {
    console.info("Call for getPlayerslist() with id :: ", teamIds, ' && url : ', this.players_url);
    return this.http.post(this.playersByIds_url, teamIds, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  submit_score_batting_details(battingDetails): Observable<any> {
    console.info("Call for submit_score_batting_details() with  url : ", this.score_batting_details_url);
    return this.http.post(this.score_batting_details_url, battingDetails, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  submit_score_bowling_details(bowlingDetails): Observable<any> {
    console.info("Call for submit_score_bowling_details() with  url : ", this.score_bowling_details_url);
    return this.http.put(this.score_bowling_details_url, bowlingDetails, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  submit_score_fow_details(fowDetails): Observable<any> {
    console.info("Call for submit_score_fow_details() with  url : ", this.score_fow_details_url);
    return this.http.put(this.score_fow_details_url, fowDetails, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  submit_score_extras_details(extrasDetails): Observable<any> {
    return this.http.post(this.score_extras_details_url, extrasDetails, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  scorecard_total_details(totalsDetails): Observable<any> {
    console.info("Call for scorecard_total_details() with  url : ", this.score_totals_details_url);
    return this.http.put(this.score_totals_details_url, totalsDetails, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  updateScorecardGameDetails(matchDetails): Observable<any> {
    return this.http.post(this.scorecard_game_details_url, matchDetails, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  getHowOutType() {
    console.info("Call for getHowOutType() with url : ", this.players_url);
    return this.http.get(this.howOutType_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  };

  findMatchByPlayingTeamsAndDate(homeTeam: number, awayTeam: number, date: any): Observable<any> {
    const url = `${this.findMatch_url}homeTeam=${homeTeam}&awayTeam=${awayTeam}&matchDate=${date}`;
    console.info("Call for findMatchByPlayingTeamsAndDate() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  loadBattingDetails(gameId: string): Observable<any> {
    const url = `${this.batting_url}gameId=${gameId}`;
    console.info("Observable Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(res => res.json()).catch(this.handleError);
  }

  loadBowlingDetails(gameId: string): Observable<any> {
    const url = `${this.bowling_url}gameId=${gameId}`;
    console.info("Observable Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(res => res.json()).catch(this.handleError);
  }

  loadExtrasDetails(gameId: string): Observable<any> {
    const url = `${this.extras_url}gameId=${gameId}`;
    console.info("Observable Call for getDetailedScore() with url : ", url);
    return this.http.get(url, this.header).map(res => res.json()).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error while fetching date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  isEmpty(val: any): boolean {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  };


}


import {ServicesConstants} from './constants.services';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LiveScoreService {

  constructor(private http: Http, private pagesConstants: ServicesConstants) {
  }
  private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  private reconsileScore = 'liveScoring/refreshScore/?';
  private preMatchInfobyUmpire = 'preMatchInfo/byUmpire';
  private playersByTeamId = 'player/byTeamId?';
  private playingXi = '/playingXI/byCaptain';
  private reconsileScore_url = this.baseUrl + this.reconsileScore;
  private preMatchInfobyUmpire_url = this.baseUrl + this.preMatchInfobyUmpire;
  private playersByTeamId_url = this.baseUrl + this.playersByTeamId;
  private playingXi_url = this.baseUrl + this.playingXi;


  reconsileScoreForm(liveGameId: string, batsmanOne: number, batsmanTwo: number): Observable<any> {

    const url = `${ this.reconsileScore_url }liveGameId=${ liveGameId }&batsmanOne=${ batsmanOne }&batsmanTwo=${ batsmanTwo }`;
    console.info('Call for reconsildeScore() with url : ', url);
    return this.http.get(url, {headers: this.header}).map(responce => responce.json())
      .catch(this.handleError);
  }

  preMatchInfoByUmpire(matchInfo): Observable<any> {
    return this.http.post(this.preMatchInfobyUmpire_url, matchInfo, this.options).map(responce => responce.json())
      .catch(this.handleError);
  }

  submitPlayingXI(players): Observable<any> {
    return this.http.post(this.playingXi_url, players, this.options).map(responce => responce.json())
      .catch(this.handleError);
  }

  playerByTeamId(teamId) {
    const url = `${ this.playersByTeamId_url }id=${ teamId }`;
    console.info('Call for playerByTeamId() with url : ', url);
    return this.http.get(url, {headers: this.header}).map(responce => responce.json())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('LiveScoreService: Error while fetching date from server', error);
    return Promise.reject(error.message || error);
  }

}



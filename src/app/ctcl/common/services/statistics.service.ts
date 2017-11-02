/**
 * Created by HudaZulifqar on 6/28/2017.
 */
/* tslint:disable */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ServicesConstants} from "./constants.services";
import {BattinginputsPojo} from "../domain/battinginputs.pojo";

@Injectable()
export class StatisticsService {

  constructor(private http: Http, private pagesConstants: ServicesConstants) {
  }

  private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  private sch_path = 'matches/schedule/?';
  private batting_path = '/records/battings/?';

  private schduel_url = this.baseUrl + this.sch_path;
  private batting_url = this.baseUrl + this.batting_path;

  // For points table
  getSchedule(seasonId: string): Promise<any> {

    const url = `${this.schduel_url}seasonId=${seasonId}`;
    console.info("Call for getSchedule() with url : ", url);
    return this.http.get(url, {headers: this.header}).toPromise().then(res => res.json())
      .catch(this.handleError);
  }

  getBattingRecords(inputs: BattinginputsPojo): Observable<any> {
   /* let team = "47";
    let player = "1396";
    let season = "31";
    let year = "2017";
    let club = "10";*/
    const url = `${this.batting_url}team=${inputs.teamId}&player=${inputs.playerId}&season=${inputs.seasonId}&year=${inputs.seasonYear}&club=${inputs.clubId}`;
    console.info("Call for getBattingRecond() with url : ", url);
   return this.http.get(url, {headers: this.header}).map(responce => responce.json())
   // return this.http.get(url, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }


  private handleError(error: any): Promise<any> {
    console.error('StatisticsService: Error while fetching date from servier', error);
    return Promise.reject(error.message || error);
  }

  isEmpty(val: any): boolean {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  };


}


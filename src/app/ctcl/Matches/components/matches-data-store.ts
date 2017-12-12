import {Injectable} from '@angular/core';
/**
 * Created by HudaZulifqar on 8/15/2017.
 */
@Injectable()
export class MatchesDataStoreService {
  private _matchDetails: any;

  getMatchDetails(): any {
    console.info('Date Store ==> Getting match details :: ', this._matchDetails);
    return this._matchDetails;
  }

  setMatchDetails(match: any) {
    console.info('Date Store ==> match details :: ', match);
    this._matchDetails = match;
  }

}

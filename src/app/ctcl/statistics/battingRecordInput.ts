/**
 * Created by HudaZulifqar on 9/10/2017.
 */
export class BattingRecordInput {

  private _playerId: string;
  private _seasonId: string;
  private _seasonYear: string;
  private _teamId: string;
  private _clubId: string;

  get playerId(): string {
    return this._playerId;
  }

  set playerId(playerId: string) {
    this._playerId = playerId;
  }

  get seasonId(): string {
    return this._seasonId;
  }

  set seasonId(seasonId: string) {
    this._seasonId = seasonId;
  }

  get seasonYear(): string {
    return this._seasonYear;
  }

  set seasonYear(seasonYear: string) {
    this._seasonYear = seasonYear;
  }

  get teamId(): string {
    return this._teamId;
  }

  set teamId(teamId: string) {
    this._teamId = teamId;
  }

  get clubId(): string {
    return this._clubId;
  }

  set clubId(clubId: string) {
    this._clubId = clubId;
  }

}

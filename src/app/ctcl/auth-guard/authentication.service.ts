/* tslint:disable */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import * as jwt_decode from 'jwt-decode';
import {ServicesConstants} from "../common/services/constants.services";
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from "./auth.constant";

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthenticationService {

  private url: string = 'api/auth';
  static AUTH_TOKEN = 'http://arvinddeshpande.dyndns.org:56040';
  private headers = new Headers({'Content-Type': 'application/json'});

  // private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  private club_list_path = 'clubs/details/';
  private players_roles_path = 'players/roles/';

  private club_list_path_url = this.baseUrl + this.club_list_path;
  private players_roles_url = this.baseUrl + this.players_roles_path;

  constructor(private http: Http, private pagesConstants: ServicesConstants) {}

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login2(user, password): Promise<string> {
    return this.http
      .post(`${ this.url }/login`, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(res => res.text());
  }

  login(username: string, password: string) {
    const body = `username=${ encodeURIComponent(username) }&password=${ encodeURIComponent(password) }&grant_type=password`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*.*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
    let auth = 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD);

    const header = new Headers({
      'Access-Control-Allow-Origin': '*.*',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': auth
    });

    // private headers = new Headers({
    //     'Access-Control-Allow-Origin': '*.*',
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   });
    console.log('header', headers);
    //    return this.http.post(AuthenticationService.AUTH_TOKEN, body, header)
    //      .map(res => res.json())
    //      .map((res: any) => {
    //        if (res.access_token) {
    //          return res.access_token;
    //        }
    //        return null;
    //      });
  }

}

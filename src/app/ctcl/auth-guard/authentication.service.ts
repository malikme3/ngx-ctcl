/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as jwt_decode from 'jwt-decode';
import {ServicesConstants} from "../common/services/constants.services";

export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class AuthenticationService {

  private url: string = 'api/auth';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;

  constructor(private http: Http,private pagesConstants: ServicesConstants) { }

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
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(user): Promise<string> {
    return this.http
      .post(`${this.url}/login`, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.text());
  }

}

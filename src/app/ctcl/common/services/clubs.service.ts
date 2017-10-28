/* tslint:disable */
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ServicesConstants} from "./constants.services";

@Injectable()
export class ClubsService {

  constructor(private http: Http, private pagesConstants: ServicesConstants) {
  }

  private header = this.pagesConstants.pagesContants.url.header;
  private options = this.pagesConstants.pagesContants.url.options;
  private baseUrl = this.pagesConstants.pagesContants.url.baseUrl;


  private club_list_path = 'clubs/details/';
  private players_roles_path = 'players/roles/';
  private ctcl_news_path = 'ctcl/news/';
  private clubs_info_path = 'clubs/info/';

  private club_list_path_url = this.baseUrl + this.club_list_path;
  private players_roles_url = this.baseUrl + this.players_roles_path;
  private ctcl_news_url = this.baseUrl + this.ctcl_news_path;
  private clubs_info_url = this.baseUrl + this.clubs_info_path;

  getClubLists(): Observable<any> {

    console.info("Call for getClubLists() with url : ", this.club_list_path_url);
    return this.http.get(this.club_list_path_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getClubsInfo(): Observable<any> {
    console.info("Call for getClubsInfor() with url : ", this.club_list_path_url);
    return this.http.get(this.clubs_info_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  };

  getPlayersRoles(): Observable<any> {

    console.info("Call for getPlayerRoles() with url : ", this.club_list_path_url);
    return this.http.get(this.players_roles_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  getCtclNews(): Observable<any> {

    console.info("Call for getCtclNews() with url : ", this.ctcl_news_url);
    return this.http.get(this.ctcl_news_url, this.header).map(responce => responce.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('ClubsService: Error while fetching date from server', error);
    return Promise.reject(error.message || error);
  }
}

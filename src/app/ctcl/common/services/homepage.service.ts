/* tslint:disable */
/**
 * Created by HudaZulifqar on 6/26/2017.
 */
/* tslint:disable */
import {Injectable} from "@angular/core";
/*import {Http} from '@angular/http';*/
import {Observable} from "rxjs/Observable";
import {ServicesConstants} from "./constants.services";
import {Http} from "@angular/http";

@Injectable()
export class HomePageService {
  images: any[];
  images_odd: any[];

  private url = 'team/position/?seasonName=2017+20+Overs+League&seasonYear=Group+A';  // URL to web api

  constructor(private http: Http, private  pagesConstant: ServicesConstants) {
  }

  header = this.pagesConstant.pagesContants.url.header;
  private matches_latest_path = 'matches/latest/';
  private batting_path = '/records/battings/?';
  private bowling_path = '/records/bowlings/?';
  private sch_path = 'matches/schedule/?';



  private options = this.pagesConstant.pagesContants.url.options;
  teamUrl = this.pagesConstant.pagesContants.url.baseUrl + this.url;
  private groupsUrls = this.pagesConstant.pagesContants.url.baseUrl + '/season/groups/?year=';
  private baseUrl = this.pagesConstant.pagesContants.url.baseUrl;
  private batting_url = this.baseUrl + this.batting_path;
  private bowling_url = this.baseUrl + this.bowling_path;
  private matches_latest_url = this.baseUrl + this.matches_latest_path;
  private schduel_url = this.baseUrl + this.sch_path;


  getSeasonGroups(year: String): Observable<any[]> {
    console.info('Making request to server for teams standing');
    return this.http.get(this.groupsUrls + year, this.header).map(res => res.json()).catch(this.handleError);
  }

  getTeamStanding(): Observable<any[]> {
    console.info('Making request to server for teams standing');
    return this.http.get(this.teamUrl, this.header).map(res => res.json())
      .catch(this.handleError);

  }

  getBattingRecords(season): Observable<any> {
    let team = "47";
    let player = "1396";
    /*let season = "31";*/
    let year = "2017";
    let club = "10";
    const url = `${this.batting_url}team=${team}&player=${player}&season=${season}&year=${year}&club=${club}`;
    console.info("Call for getBattingRecond() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
    // return this.http.get(url, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }
  getBowlingRecords(season): Observable<any> {
    let team = "47";
    let player = "1396";
    /*let season = "31";*/
    let year = "2017";
    let club = "10";
    const url = `${this.bowling_url}team=${team}&player=${player}&season=${season}&year=${year}&club=${club}`;
    console.info("Call for getBowlingRecond() with url : ", url);
    return this.http.get(url, this.header).map(responce => responce.json())
    // return this.http.get(url, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  getLatestMatchesResult(): Observable<any> {
    console.info("Call for getBattingRecond() with url : ", this.matches_latest_url);
    return this.http.get(this.matches_latest_url, this.header).map(responce => responce.json())
    // return this.http.get(url, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }
  getNextMatches(seasonId): Observable<any> {
    const url = `${this.schduel_url}seasonId=${seasonId}`;
    console.info("Call for getNextMatches() with url : ", this.schduel_url);
    return this.http.get(url, this.header).map(responce => responce.json())
    // return this.http.get(url, this.options).map(responce => responce.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('Error while date from servier', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPhoto() {
    this.images = [];
    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria2.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria4.jpg',
      alt: 'Description for Image 4',
      title: 'Title 4'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria6.jpg',
      alt: 'Description for Image 6',
      title: 'Title 6'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria8.jpg',
      alt: 'Description for Image 8',
      title: 'Title 8'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria10.jpg',
      alt: 'Description for Image 10',
      title: 'Title 10'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria12.jpg',
      alt: 'Description for Image 12',
      title: 'Title 12'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria14.png',
      alt: 'Description for Image 12',
      title: 'Title 14'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria16.jpg',
      alt: 'Description for Image 16',
      title: 'Title 16'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria18.jpg',
      alt: 'Description for Image 18',
      title: 'Title 18'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria20.jpg',
      alt: 'Description for Image 20',
      title: 'Title 20'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria22.jpg',
      alt: 'Description for Image 22',
      title: 'Title 22'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria24.jpg',
      alt: 'Description for Image 24',
      title: 'Title 24'
    });

    this.images.push({
      source: ' ../../../../assets/images/Galleria/galleria26.jpg',
      alt: 'Description for Image 26',
      title: 'Title 26'
    });


    return this.images;
  }

  getPhoto_odd() {
    this.images_odd = [];
    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria1.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria3.jpg',
      alt: 'Description for Image 3',
      title: 'Title 3'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria5.jpg',
      alt: 'Description for Image 5',
      title: 'Title 5'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria7.jpg',
      alt: 'Description for Image 7',
      title: 'Title 7'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria9.jpg',
      alt: 'Description for Image 9',
      title: 'Title 9'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria11.jpg',
      alt: 'Description for Image 11',
      title: 'Title 11'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria13.jpg',
      alt: 'Description for Image 12',
      title: 'Title 13'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria15.png',
      alt: 'Description for Image 12',
      title: 'Title 15'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria17.jpg',
      alt: 'Description for Image 12',
      title: 'Title 17'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria19.jpg',
      alt: 'Description for Image 18',
      title: 'Title 17'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria21.jpg',
      alt: 'Description for Image 18',
      title: 'Title 17'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria23.jpg',
      alt: 'Description for Image 18',
      title: 'Title 17'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria25.jpg',
      alt: 'Description for Image 18',
      title: 'Title 17'
    });

    this.images_odd.push({
      source: ' ../../../../assets/images/Galleria/galleria27.jpg',
      alt: 'Description for Image 18',
      title: 'Title 17'
    });

    return this.images_odd;
  }

}

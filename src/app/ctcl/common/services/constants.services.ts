/* tslint:disable */
/**
 * Created by HudaZulifqar on 6/26/2017.
 */
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from "@angular/http";

@Injectable()
export class ServicesConstants {
  private headers = new Headers({
    'Access-Control-Allow-Origin': '*.*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });

  /*private headers = new Headers({ 'Content-Type': 'application/json' });*/
  private options = new RequestOptions({ headers: this.headers });

  // URL to middle tier Java (Spring MVC)
  private url = 'http://localhost:7861/api/';
  //private url = 'http://arvinddeshpande.dyndns.org:56040/api/';
  pagesContants = {
    url: {
      header: this.headers,
      options: this.options,
      baseUrl: this.url
    }
  }
}

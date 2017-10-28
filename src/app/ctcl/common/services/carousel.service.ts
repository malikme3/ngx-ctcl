/**
 * Created by HudaZulifqar on 9/13/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CarouselPojo} from "../domain/carousel.pojo";

@Injectable()
export class CarouselService {

  constructor(private http: Http) {}

  getCarsSmall() {
    return this.http.get('showcase/resources/data/cars-small.json')
      .toPromise()
      .then(res => <CarouselPojo[]> res.json().data)
      .then(data => { return data; });
  }

  getCarsMedium() {
    return this.http.get('showcase/resources/data/cars-medium.json')
      .toPromise()
      .then(res => <CarouselPojo[]> res.json().data)
      .then(data => { return data; });
  }

  getCarsLarge() {
    return this.http.get('showcase/resources/data/cars-large.json')
      .toPromise()
      .then(res => <CarouselPojo[]> res.json().data)
      .then(data => { return data; });
  }
}

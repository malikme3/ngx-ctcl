import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Zulifqar Ahmad', picture: 'assets/images/junaid.jpeg' },
    eva: { name: 'Basit Zabair', picture: 'assets/images/kohli.jpeg' },
    jack: { name: 'Wasim Akram', picture: 'assets/images/pollock.jpeg' },
    lee: { name: 'Shezad Ahmad', picture: 'assets/images/lee.jpeg' },
    alan: { name: 'Ali Tanveer', picture: 'assets/images/smith.jpeg' },
    kate: { name: 'Irfan Khan', picture: 'assets/images/misbah.jpeg' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}

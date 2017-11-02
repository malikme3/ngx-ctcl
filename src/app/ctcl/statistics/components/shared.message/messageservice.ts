/**
 * Created by HudaZulifqar on 9/11/2017.
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';

@Injectable()
export class MessageService {

  private messageSource = new Subject<any>();

  messageObserver = this.messageSource.asObservable();

  add(message: any) {
    if(message) {
      this.messageSource.next(message);
    }
  }

  addAll(messages: any[]) {
    if(messages && messages.length) {
      this.messageSource.next(messages);
    }
  }

  clear() {
    this.messageSource.next(null);
  }
}

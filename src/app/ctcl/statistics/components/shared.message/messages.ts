/**
 * Created by HudaZulifqar on 9/11/2017.
 */
import {Component, EventEmitter, Input, NgModule, OnDestroy, Optional, Output} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Message} from "./message";
import {MessageService} from "./messageservice";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'status-messages',
  templateUrl:'./message.html',
  styleUrls:['./messages.css'],

})
export class Messages implements OnDestroy {

  @Input() value: Message[];

  @Input() closable: boolean = true;

  @Output() valueChange: EventEmitter<Message[]> = new EventEmitter<Message[]>();

  subscription: Subscription;

  constructor(@Optional() public messageService: MessageService) {
    if (messageService) {
      this.subscription = messageService.messageObserver.subscribe(messages => {
        if (messages) {
          if (messages instanceof Array)
            this.value = messages;
          else
            this.value = [messages];
        }
        else {
          this.value = null;
        }
      });
    }
  }

  hasMessages() {
    return this.value && this.value.length > 0;
  }

  getSeverityClass() {
    return this.value[0].severity;
  }

  clear(event) {
    this.value = [];
    this.valueChange.emit(this.value);

    event.preventDefault();
  }

  get icon(): string {
    let icon: string = null;
    if (this.hasMessages()) {
      let msg = this.value[0];
      switch (msg.severity) {
        case 'success':
          icon = 'fa-check';
          break;

        case 'info':
          icon = 'fa-info-circle';
          break;

        case 'error':
          icon = 'fa-close';
          break;

        case 'warn':
          icon = 'fa-warning';
          break;

        case 'success':
          icon = 'fa-check';
          break;

        default:
          icon = 'fa-info-circle';
          break;
      }
    }

    return icon;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [Messages],
  declarations: [Messages]
})
export class MessagesModule {
}

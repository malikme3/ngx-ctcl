/**
 * Created by HudaZulifqar on 9/12/2017.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'cric-tab-menu',
  styleUrls: ['tabmenu.component.css'],
  templateUrl: './tabview.component.html',
})
export class TabMenuComponent {

  @Input() model: MenuItem[];

  @Input() activeItem: MenuItem;

  @Input() popup: boolean;

  @Input() style: any;

  @Input() styleClass: string;

  @Output() notify_tabMenu: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    if (!this.activeItem && this.model && this.model.length) {
      this.activeItem = this.model[0];
    }
  }

  itemClick(event: Event, item: MenuItem) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (!item.url) {
      event.preventDefault();
    }

    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }


    this.activeItem = item;
    console.log('this.activeItem : ', this.activeItem);
    this.notify_tabMenu.emit(this.activeItem);

  }
}

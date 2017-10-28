/* tslint:disable */
import { Component } from '@angular/core';

import { CTCL_MENU_ITEMS } from './ctcl-menu';

@Component({
  selector: 'ctcl-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class CtclComponent {

  menu = CTCL_MENU_ITEMS;
}

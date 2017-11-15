/* tslint:disable */
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  }
];

export const routing = RouterModule.forChild(routes);

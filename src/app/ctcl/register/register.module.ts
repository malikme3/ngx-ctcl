/* tslint:disable */
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routing} from "./register.routing";
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatchesService} from "../common/services/matches.service";
import {MatchesConstants} from "../common/services/matches.constant.service";
import {MatchesDataStoreService} from "../common/services/matches-data-store.service";
import {CtclSharedModule} from "../shared/shared.module";
import {ThemeModule} from "../../@theme/theme.module";
import {AuthenticationService} from "../auth-guard/authentication.service";
import {AuthGuardService} from "../auth-guard/auth-guard.service";
import {ServicesConstants} from "../common/services/constants.services";
import {CommonUtilsService} from "../common/services/common-utils.service";
import {RegisterComponent} from "./register.component";
import {LoginComponent} from "./login.component";
import {UserService} from "../auth-guard/user.service";


const components = [RegisterComponent, LoginComponent];

@NgModule({
    imports: [ThemeModule, RouterModule, CtclSharedModule, FormsModule, ReactiveFormsModule, CommonModule,routing],
    declarations: [...components],
    providers: [MatchesService, MatchesConstants, MatchesDataStoreService, CommonUtilsService, AuthenticationService,
      AuthGuardService, ServicesConstants, UserService],
})
export class RegisterModule {
}

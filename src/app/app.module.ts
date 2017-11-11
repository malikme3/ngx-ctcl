/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpModule, RequestOptions} from '@angular/http';
import {CoreModule} from './@core/core.module';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ThemeModule} from './@theme/theme.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthRequestOptions} from './ctcl/auth-guard/auth-request';
import {AuthGuardService} from './ctcl/auth-guard/auth-guard.service';
import {AuthenticationService} from './ctcl/auth-guard/authentication.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuardService, AuthenticationService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {
      provide: RequestOptions,
      useClass: AuthRequestOptions,
    },
  ],
})
export class AppModule {
}

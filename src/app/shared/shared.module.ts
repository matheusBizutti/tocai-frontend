import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

import { ThfModule } from '@totvs/thf-ui';

import { AuthenticationTypeService } from '../authentication-type/authentication-type.service';
import { AuthGuard } from '../auth-guard/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { BaseUrl } from '../baseurl/baseurl.service';
import { InterceptorModule } from '../interceptor/interceptor.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InterceptorModule,

    ThfModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

    ThfModule
  ],
  providers: [ AuthGuard, AuthenticationTypeService, AuthService, BaseUrl, CookieService ]
})
export class SharedModule { }

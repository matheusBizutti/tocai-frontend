import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationTypeService } from './authentication-type/authentication-type.service';
import { AuthGuard } from './auth-guard/auth-guard.service';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [AuthGuard, AuthenticationTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

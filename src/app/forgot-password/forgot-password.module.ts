import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRouting } from './forgot-password.routing';

@NgModule({
  imports: [
    SharedModule,
    ForgotPasswordRouting
  ],
  declarations: [
   ForgotPasswordComponent
  ],
  providers: [],
  bootstrap: []
})
export class ForgotPasswordModule { }

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRouting } from './forgot-password.routing';
import { ForgotPasswordService } from './forgot-password.service';

@NgModule({
  imports: [
    SharedModule,
    ForgotPasswordRouting
  ],
  declarations: [
   ForgotPasswordComponent
  ],
  providers: [ForgotPasswordService],
  bootstrap: []
})
export class ForgotPasswordModule { }

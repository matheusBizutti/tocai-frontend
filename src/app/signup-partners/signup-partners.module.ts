import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignupPartnersComponent } from './signup-partners.component';
import { SignupPartnersRouting } from './signup-partners.routing';
import { SignupService } from './signup-partners.service';

@NgModule({
  imports: [
    SharedModule,
    SignupPartnersRouting
  ],
  declarations: [
    SignupPartnersComponent
  ],
  providers: [SignupService],
  bootstrap: []
})
export class SignupPartnersModule {}

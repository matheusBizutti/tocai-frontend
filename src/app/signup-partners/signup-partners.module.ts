import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignupPartnersComponent } from './signup-partners.component';
import { SignupPartnersRouting } from './signup-partners.routing';

@NgModule({
  imports: [
    SharedModule,
    SignupPartnersRouting
  ],
  declarations: [
    SignupPartnersComponent
  ],
  providers: [],
  bootstrap: []
})
export class SignupPartnersModule {}

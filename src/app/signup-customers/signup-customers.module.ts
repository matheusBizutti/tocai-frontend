import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignupCustomersComponent } from './signup-customers.component';
import { SignupCustomersRouting } from './signup-customers.routing';
import { SignupService } from '../signup-partners/signup-partners.service';

@NgModule({
  imports: [
    SharedModule,
    SignupCustomersRouting
  ],
  declarations: [
    SignupCustomersComponent
  ],
  providers: [SignupService],
  bootstrap: []
})
export class SignupCustomersModule {}

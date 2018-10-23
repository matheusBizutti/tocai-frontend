import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignupCustomersComponent } from './signup-customers.component';
import { SignupCustomersRouting } from './signup-customers.routing';

@NgModule({
  imports: [
    SharedModule,
    SignupCustomersRouting
  ],
  declarations: [
    SignupCustomersComponent
  ],
  providers: [],
  bootstrap: []
})
export class SignupCustomersModule {}

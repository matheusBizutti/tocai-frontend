import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PaymentsComponent } from './payments.component';
import { PaymentsRouting } from './payments.routing';

@NgModule({
  imports: [
    SharedModule,
    PaymentsRouting
  ],
  declarations: [
    PaymentsComponent
  ],
  providers: [],
  bootstrap: []
})
export class PaymentsModule {}

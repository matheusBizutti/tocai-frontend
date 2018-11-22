import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DoubtsComponent } from './doubts.component';
import { DoubtsRouting } from './doubts.routing';

@NgModule({
  imports: [
    SharedModule,
    DoubtsRouting
  ],
  declarations: [
   DoubtsComponent
  ],
  providers: [],
  bootstrap: []
})
export class DoubtsModule { }

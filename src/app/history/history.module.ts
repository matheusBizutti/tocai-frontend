import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HistoryComponent } from './history.component';
import { HistoryRouting } from './history.routing';

@NgModule({
  imports: [
    SharedModule,
    HistoryRouting
  ],
  declarations: [
   HistoryComponent
  ],
  providers: [],
  bootstrap: []
})
export class HistoryModule { }

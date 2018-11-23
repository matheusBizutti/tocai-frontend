import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MusicalListDetailComponent } from './musical-list-detail.component';
import { MusicalListDetailRouting } from './musical-list-detail.routing';
import { MusicalListDetailService } from './musical-list-detail.service';

@NgModule({
  imports: [
    SharedModule,
    MusicalListDetailRouting
  ],
  declarations: [
    MusicalListDetailComponent
  ],
  providers: [MusicalListDetailService],
  bootstrap: []
})
export class MusicalListDetailModule { }

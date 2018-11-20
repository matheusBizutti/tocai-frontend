import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MusicalListDetailComponent } from './musical-list-detail.component';
import { MusicalListDetailRouting } from './musical-list-detail.routing';

@NgModule({
  imports: [
    SharedModule,
    MusicalListDetailRouting
  ],
  declarations: [
    MusicalListDetailComponent
  ],
  providers: [],
  bootstrap: []
})
export class MusicalListDetailModule { }

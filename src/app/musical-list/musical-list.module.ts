import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MusicalListComponent } from './musical-list.component';
import { MusicalListRouting } from './musical-list.routing';

@NgModule({
  imports: [
    SharedModule,
    MusicalListRouting
  ],
  declarations: [
    MusicalListComponent
  ],
  providers: [],
  bootstrap: []
})
export class MusicalListModule {}

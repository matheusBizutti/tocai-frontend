import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { MusicalListComponent } from './musical-list.component';
import { MusicalListRouting } from './musical-list.routing';
import { MusicalListService } from './musical-list.service';

@NgModule({
  imports: [
    SharedModule,
    MusicalListRouting
  ],
  declarations: [
    MusicalListComponent
  ],
  providers: [MusicalListService],
  bootstrap: []
})
export class MusicalListModule {}

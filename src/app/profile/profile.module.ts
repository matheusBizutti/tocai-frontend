import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';

@NgModule({
  imports: [
    SharedModule,
    ProfileRouting
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [],
  bootstrap: []
})
export class ProfileModule { }

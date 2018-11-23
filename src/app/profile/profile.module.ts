import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [
    SharedModule,
    ProfileRouting
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ProfileService],
  bootstrap: []
})
export class ProfileModule { }

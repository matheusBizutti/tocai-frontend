import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { InitialPageComponent } from './initial-page.component';
import { InitialPageRouting } from './initial-page.routing';

@NgModule({
  imports: [
    SharedModule,
    InitialPageRouting
  ],
  declarations: [
    InitialPageComponent
  ],
  providers: [],
  bootstrap: []
})
export class InitialPageModule { }

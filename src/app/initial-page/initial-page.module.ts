import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { InitialPageComponent } from './initial-page.component';
import { InitialPageRouting } from './initial-page.routing';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    InitialPageRouting
  ],
  declarations: [
    InitialPageComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: []
})
export class InitialPageModule { }

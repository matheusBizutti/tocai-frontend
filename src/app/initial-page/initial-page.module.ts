import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../footer/footer.component';
import { InitialPageComponent } from './initial-page.component';
import { InitialPageRouting } from './initial-page.routing';
import { InitialPageService } from './initial-page.service';

@NgModule({
  imports: [
    SharedModule,
    InitialPageRouting
  ],
  declarations: [
    InitialPageComponent,
    FooterComponent
  ],
  providers: [InitialPageService],
  bootstrap: []
})
export class InitialPageModule { }

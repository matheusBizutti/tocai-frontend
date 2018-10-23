import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupPartnersComponent } from './signup-partners.component';

const routes: Routes = [
  { path: '', component: SignupPartnersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupPartnersRouting {}

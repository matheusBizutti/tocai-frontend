import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupCustomersComponent } from './signup-customers.component';

const routes: Routes = [
  { path: '', component: SignupCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupCustomersRouting {}

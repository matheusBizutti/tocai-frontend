import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicalListDetailComponent } from './musical-list-detail.component';

const routes: Routes = [
  { path: '', component: MusicalListDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicalListDetailRouting {}

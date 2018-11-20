import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicalListComponent } from './musical-list.component';

const routes: Routes = [
  { path: '', component: MusicalListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicalListRouting {}

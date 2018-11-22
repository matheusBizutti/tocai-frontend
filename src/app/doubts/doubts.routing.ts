import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoubtsComponent } from './doubts.component';

const routes: Routes = [
  {path: '', component: DoubtsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubtsRouting {}

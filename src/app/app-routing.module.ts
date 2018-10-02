import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard/auth-guard.service';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'tocai', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'payments',
        loadChildren: './payments/payments.module#PaymentsModule'
      }
    ]
  },
  { path: 'initial-page',
    loadChildren: './initial-page/initial-page.module#InitialPageModule'
  },
  { path: '', redirectTo: '/initial-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

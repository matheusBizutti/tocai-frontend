import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard/auth-guard.service';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'tocai', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'payments',
        loadChildren: './payments/payments.module#PaymentsModule'
      },
      { path: 'musical-list',
        loadChildren: './musical-list/musical-list.module#MusicalListModule'
      },
      { path: 'musical-list-detail/:id',
        loadChildren: './musical-list-detail/musical-list-detail.module#MusicalListDetailModule'
      },
      { path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      }
    ]
  },
  { path: 'initial-page',
    loadChildren: './initial-page/initial-page.module#InitialPageModule'
  },
  { path: 'forgot-password',
    loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule'
  },
  { path: 'signup-partners',
    loadChildren: './signup-partners/signup-partners.module#SignupPartnersModule'
  },
  { path: 'signup-customers',
    loadChildren: './signup-customers/signup-customers.module#SignupCustomersModule'
  },
  { path: '', redirectTo: '/initial-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

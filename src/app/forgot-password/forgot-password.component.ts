import { Component, OnInit, OnDestroy } from '@angular/core';

import { ThfBreadcrumb, ThfNotificationService } from '@totvs/thf-ui';
import { Subscription } from 'rxjs';
import { ForgotPasswordService } from './forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Início', link: '/initial-page' },
      { label: 'Alterar senha' }
    ]
  };

  userData = {
    password: undefined,
    confirmpassword: undefined,
    newpassword: undefined,
    email: undefined
  };

  private subscription: Subscription;

  constructor(private forgotPasswordService: ForgotPasswordService,
              private thfNotification: ThfNotificationService,
              private router: Router) { }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {}

  changePassword(type) {

    const FAILED = 'Não foi possível alterar os dados.';
    const SUCCESS = 'Dados alterados com sucesso.';

    if (this.userData.newpassword === this.userData.confirmpassword &&
        this.userData.newpassword !== this.userData.password) {

        const body = {
          password: this.userData.newpassword,
          confirmpassword: this.userData.confirmpassword
        };

        this.subscription = this.forgotPasswordService.changePassword(body, this.userData.email, type).subscribe(response => {
          this.thfNotification.success(SUCCESS);
          this.router.navigate(['/initial-page']);
        }, err => {
          console.log(err);
          this.thfNotification.error(FAILED);
        });
    } else {
      this.thfNotification.error('As senhas devem ser iguais.');
    }

  }

}

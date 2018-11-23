import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { Router } from '@angular/router';
import { ThfNotificationService } from '@totvs/thf-ui';
import { SignupService } from '../signup-partners/signup-partners.service';

@Component({
  selector: 'app-signup-customers',
  templateUrl: './signup-customers.component.html',
  styleUrls: ['./signup-customers.component.css']
})
export class SignupCustomersComponent implements OnInit, OnDestroy {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/initial-page' },
      { label: 'Cadastrar como cliente' }
    ]
  };

  customerPersonalData = {
    name: undefined,
    lastname: undefined,
    telefone: undefined,
    postalcode: undefined,
    city: undefined,
    typeuser: '2',
    email: undefined,
    password: undefined,
    confirmpassword: undefined,
  };

  private subscription: Subscription;

  constructor(private router: Router,
              private thfNotification: ThfNotificationService,
              private signupService: SignupService) {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {}

  signupCustomers() {

    this.subscription = this.signupService.signup(this.customerPersonalData, '2').subscribe(response => {
      this.thfNotification.success('Usuário cadastrado com sucesso.');
      this.router.navigate(['/initial-page']);
    }, err => {
      this.thfNotification.error('Não foi possível efetuar o cadastro.');
    });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { Router } from '@angular/router';
import { ThfNotificationService } from '@totvs/thf-ui';
import { Subscription } from 'rxjs';
import { SignupService } from './signup-partners.service';

@Component({
  selector: 'app-signup-partners',
  templateUrl: './signup-partners.component.html',
  styleUrls: ['./signup-partners.component.css']
})
export class SignupPartnersComponent implements OnInit, OnDestroy {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/initial-page' },
      { label: 'Cadastrar como parceiro' }
    ]
  };

  partnerPersonalData = {
    name: undefined,
    lastname: undefined,
    telefone: undefined,
    city: undefined,
    linkyoutube: undefined,
    linkspotify: undefined,
    travel: undefined,
    type: undefined,
    typeuser: '1',
    password: undefined,
    confirmpassword: undefined,
    musicalstyle: undefined
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

  signupPartners() {

    this.partnerPersonalData.confirmpassword = this.partnerPersonalData.password;
    this.subscription = this.signupService.signup(this.partnerPersonalData, '1').subscribe(response => {
      this.thfNotification.success('Usuário cadastrado com sucesso.');
      this.router.navigate(['/initial-page']);
    }, err => {
      this.thfNotification.error('Não foi possível efetuar o cadastro.');
    });
  }

}

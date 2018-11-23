import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfBreadcrumb, ThfNotificationService } from '@totvs/thf-ui';

import { AuthService } from '../auth/auth.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Serviços musicais', link: '/tocai/musical-list' },
      { label: 'Detalhe' }
    ]
  };

  customerPersonalData = {
    name: undefined,
    lastname: undefined,
    telefone: undefined
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
    musicalstyle: undefined
  };

  email;

  userType;

  private subscriptionPersonalData: Subscription;

  constructor(private authService: AuthService,
              private thfNotification: ThfNotificationService,
              private profileService: ProfileService,
              private router: Router) {}

  ngOnDestroy() {

    if (this.subscriptionPersonalData) {
      this.subscriptionPersonalData.unsubscribe();
    }

    this.userType = undefined;

  }

  ngOnInit() {
    this.userType = localStorage.getItem('userType');
    this.email = this.authService.getEmail();
  }

  changePersonalDataProfile(type) {

    const FAILED = 'Não foi possível alterar os dados.';
    const SUCCESS = 'dados alterados com sucesso.';

    const body = type === '1' ? this.partnerPersonalData : this.customerPersonalData;

    this.subscriptionPersonalData = this.profileService.changePersonalData(body, this.email, type).subscribe(response => {
      this.thfNotification.success(SUCCESS);
      this.restore();
    }, err => {
      console.log(err);
      this.thfNotification.error(FAILED);
    });

  }

  private restore() {

    this.customerPersonalData = {
      name: undefined,
      lastname: undefined,
      telefone: undefined
    };

    this.partnerPersonalData = {
      name: undefined,
      lastname: undefined,
      telefone: undefined,
      city: undefined,
      linkyoutube: undefined,
      linkspotify: undefined,
      travel: undefined,
      type: undefined,
      musicalstyle: undefined
    };

  }

}

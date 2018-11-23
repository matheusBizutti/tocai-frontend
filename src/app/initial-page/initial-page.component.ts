import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfNotificationService } from '@totvs/thf-ui';

import { AuthService } from '../auth/auth.service';
import { AuthenticationTypeService } from '../authentication-type/authentication-type.service';
import { InitialPageService } from './initial-page.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit, OnDestroy {

  @ViewChild('modalCustomers') modalCustomers: ThfModalComponent;
  @ViewChild('modalPartners') modalPartners: ThfModalComponent;

  private login;
  private isLoginDefault: boolean;
  private password;
  private subscription: Subscription;

  constructor(private router: Router,
              private authenticationTypeService: AuthenticationTypeService,
              private thfNotification: ThfNotificationService,
              private initialPageService: InitialPageService,
              private authService: AuthService) { }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

  ngOnInit() { }

  enableLoginDefault() {
    this.isLoginDefault = !this.isLoginDefault;
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  signUp(isPartner = false) {
    const route = isPartner ? 'signup-partners' : 'signup-customers';
    this.router.navigate([route]);
  }

  signin(type = '') {

    this.authenticationTypeService.setType(type);

    const route = type === '1' ? 'tocai/profile' : 'tocai/musical-list';

    const INVALID_ACCESS = 'Acesso inválido';

    const body = {
      email:  this.login,
      password: this.password
    };

    this.subscription = this.initialPageService.siginAuth(body).subscribe(response => {

      this.authService.setToken(response['token']);
      this.authService.setUserType(type);
      this.router.navigate([route]);

    }, err => {
      this.thfNotification.error(INVALID_ACCESS);
    });

  }

  openModal(modalType = 1) {
    if (modalType === 1) {
      this.modalPartners.open();
    } else {
      this.isLoginDefault = false;
      this.modalCustomers.open();
    }
  }

}

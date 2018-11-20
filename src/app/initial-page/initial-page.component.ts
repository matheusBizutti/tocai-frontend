import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';

import { AuthenticationTypeService } from '../authentication-type/authentication-type.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  @ViewChild('modalCustomers') modalCustomers: ThfModalComponent;
  @ViewChild('modalPartners') modalPartners: ThfModalComponent;

  private login;
  private isLoginDefault: boolean;
  private password;

  constructor(private router: Router, private authenticationTypeService: AuthenticationTypeService) { }

  ngOnInit() { }

  enableLoginDefault() {
    this.isLoginDefault = !this.isLoginDefault;
  }

  signUp(isPartner = false) {
    const route = isPartner ? 'signup-partners' : 'signup-customers';
    this.router.navigate([route]);
  }

  signin(type = '') {

    localStorage.setItem('teste', 'logged');

    this.authenticationTypeService.setType(type);

    const route = type === '1' ? 'tocai/payments' : 'tocai/musical-list';

    this.router.navigate([route]);

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

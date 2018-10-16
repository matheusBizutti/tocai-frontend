import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';

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

  constructor(private router: Router) { }

  ngOnInit() { }

  enableLoginDefault() {
    this.isLoginDefault = !this.isLoginDefault;
  }

  openModal(modalType = 1) {
    if (modalType === 1) {
      this.modalPartners.open();
    } else {
      this.isLoginDefault = false;
      this.modalCustomers.open();
    }
  }

  mockCall() {

    localStorage.setItem('teste', 'logged');
    this.router.navigate(['tocai/payments']);

  }

  loginDefault() {

    localStorage.setItem('teste', 'logged');
    this.router.navigate(['tocai/payments']);

  }

}

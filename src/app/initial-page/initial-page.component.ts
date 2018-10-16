import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  @ViewChild('modalPartners') modalPartners: ThfModalComponent;

  private login;
  private password;

  constructor(private router: Router) { }

  ngOnInit() { }

  openModal(modalType = 1) {
    if (modalType === 1) {
      this.modalPartners.open();
    } else {
      // open the next modal.
    }
  }

  mockCall() {

    localStorage.setItem('teste', 'logged');
    this.router.navigate(['tocai/payments']);

  }

}

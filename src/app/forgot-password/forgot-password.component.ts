import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Início', link: '/initial-page' },
      { label: 'Alterar senha' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

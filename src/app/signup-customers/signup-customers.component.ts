import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';

@Component({
  selector: 'app-signup-customers',
  templateUrl: './signup-customers.component.html',
  styleUrls: ['./signup-customers.component.css']
})
export class SignupCustomersComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/initial-page' },
      { label: 'Cadastrar como cliente' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

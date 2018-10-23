import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';

@Component({
  selector: 'app-signup-partners',
  templateUrl: './signup-partners.component.html',
  styleUrls: ['./signup-partners.component.css']
})
export class SignupPartnersComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/initial-page' },
      { label: 'Cadastrar como parceiro' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

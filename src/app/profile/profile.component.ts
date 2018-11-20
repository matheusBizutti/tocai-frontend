import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Serviços musicais', link: '/tocai/musical-list' },
      { label: 'Detalhe' }
    ]
  };

  constructor() {}

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui';

@Component({
  selector: 'app-musical-list-detail',
  templateUrl: './musical-list-detail.component.html',
  styleUrls: ['./musical-list-detail.component.css']
})
export class MusicalListDetailComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Serviços musicais', link: '/tocai/musical-list' },
      { label: 'Detalhe' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

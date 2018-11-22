import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/initial-page' },
      { label: 'Quem somos' }
    ]
  };

  history = `Somos uma plataforma que tem como objetivo efetuar o meio campo entre ` +
            `talentos musicais e pessoas que buscam serviços desse modelo. ` +
            `Permitindo que o anunciante recebe muito mais contato, e dessa forma ` +
            `aumentando sua receita mensal, e que busca um serviço musical o encontra com ` +
            `facilidade e praticidade.`;


  constructor() { }

  ngOnInit() {
  }

}

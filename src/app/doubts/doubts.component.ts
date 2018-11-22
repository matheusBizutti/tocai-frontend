import { Component, OnInit } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui';

@Component({
  selector: 'app-doubts',
  templateUrl: './doubts.component.html',
  styleUrls: ['./doubts.component.css']
})
export class DoubtsComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/initial-page' },
      { label: 'Quem somos' }
    ]
  };

  items = [
    { question: 'Quem pode anunciar na plataforma?', answer: 'Todos que possuem algum talento musical para oferecer.' },
    { question: 'Qualquer cliente pode ver meu perfil?', answer: 'Sim, todo cliente com acesso a plataforma pode encontrar o seu perfil.' },
    { question: 'Preciso pagar algum valor para anunciar?', answer: 'Nessa primeira versão estamos colocando o produto sem custos.' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

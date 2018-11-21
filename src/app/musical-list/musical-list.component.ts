import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ThfModalComponent } from '@totvs/thf-ui';

@Component({
  selector: 'app-musical-list',
  templateUrl: './musical-list.component.html',
  styleUrls: ['./musical-list.component.css']
})
export class MusicalListComponent implements OnInit {

  musicalList: Array<Object> = [
    {
      id: '001',
      name: 'Jorge e Mateus',
      musicalStyle: 'Sertanejo',
      change: '1',
      type: '2'
    },
    {
      id: '002',
      name: 'Lucas Lucco',
      musicalStyle: 'Sertanejo',
      change: '2',
      type: '1'
    },
    {
      id: '003',
      name: 'MC KEKEL',
      musicalStyle: 'Funk',
      change: '1',
      type: '1'
    }
  ];

  @ViewChild('modalMessageNow') modalMessageNow: ThfModalComponent;

  constructor(private router: Router) {}

  ngOnInit() {}

  contact(id = '') {

    this.router.navigate(['tocai/musical-list-detail/' + id]);

  }

  getType(type = '') {

    let typeReturn = '';

    switch (type) {

      case '1': {
        typeReturn = 'CARREIRA SOLO';
        break;
      }
      case '2': {
        typeReturn = 'DUPLA';
        break;
      }
      case '3': {
        typeReturn = 'BANDA';
        break;
      }
      default: {
        typeReturn = '';
        break;
     }

    }

    return typeReturn;
  }

  getChange(type = '') {

    let labelChangeReturn = '';

    switch (type) {

      case '1': {
        labelChangeReturn = 'SIM';
        break;
      }
      case '2': {
        labelChangeReturn = 'NÃO';
        break;
      }
      default: {
        labelChangeReturn = '';
        break;
     }

    }

    return labelChangeReturn;
  }

  modalClose() {
    this.modalMessageNow.close();
  }

  modalOpen() {
    this.modalMessageNow.open();
  }

  sendMail() {
    console.log('sendmail');
  }

}

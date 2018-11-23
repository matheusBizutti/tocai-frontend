import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfModalComponent, ThfNotificationService } from '@totvs/thf-ui';
import { MusicalListService } from './musical-list.service';

@Component({
  selector: 'app-musical-list',
  templateUrl: './musical-list.component.html',
  styleUrls: ['./musical-list.component.css']
})
export class MusicalListComponent implements OnInit, OnDestroy {

  musicalList: Array<Object>;

  private subscription: Subscription;
  @ViewChild('modalMessageNow') modalMessageNow: ThfModalComponent;

  constructor(private router: Router,
              private thfNotification: ThfNotificationService,
              private musicalListService: MusicalListService) {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscription = this.musicalListService.getMusicalList('1').subscribe(response => {
      this.musicalList = [...response];
    });
  }

  contact(email = '') {

    this.router.navigate(['tocai/musical-list-detail/' + email]);

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

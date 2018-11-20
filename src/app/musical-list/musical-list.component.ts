import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      quantityShows: '20',
      type: '2'
    },
    {
      id: '002',
      name: 'Lucas Lucco',
      musicalStyle: 'Sertanejo',
      quantityShows: '2',
      type: '1'
    },
    {
      id: '003',
      name: 'MC KEKEL',
      musicalStyle: 'Funk',
      quantityShows: '54',
      type: '1'
    }
  ];

  typeReturn = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  contact(id = '') {

    this.router.navigate(['tocai/musical-list-detail/' + id]);

  }

  getType(type = '') {

    switch (type) {

      case '1': {
        this.typeReturn = 'CARREIRA SOLO';
        break;
      }
      case '2': {
        this.typeReturn = 'DUPLA';
        break;
      }
      case '3': {
        this.typeReturn = 'BANDA';
        break;
      }
      default: {
        this.typeReturn = '';
        break;
     }

    }

    console.log('type: ', type, this.typeReturn);
    return this.typeReturn;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationTypeService {

  private userType = ''; // - 1 partners - 2 customers;

  constructor() { }

  setType(userType = '') {

    if (userType === '1') {
      this.userType = '1'; // - partners
    } else {
      this.userType = '2'; // - customers
    }

    localStorage.setItem('userType', this.userType);

  }

}

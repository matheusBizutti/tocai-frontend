import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationTypeService {

  private userType = ''; // - 1 partners - 2 customers;

  constructor(private authService: AuthService) { }

  setType(userType = '') {

    if (userType === '1') {
      this.userType = '1'; // - partners
    } else {
      this.userType = '2'; // - customers
    }

    this.authService.setUserType(this.userType);

  }

}

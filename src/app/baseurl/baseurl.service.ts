import { Injectable } from '@angular/core';

@Injectable()
export class BaseUrl {

  private url = 'http://40.121.33.135:8080/api/';
  private urlAuth = 'http://40.121.33.135:8080/auth/';

  constructor() { }

  getBaseUrl() {
    return this.url;
  }

  getBaseUrlAuthenticate() {
    return this.urlAuth;
  }

}

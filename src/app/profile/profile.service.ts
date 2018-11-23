import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseUrl } from '../baseurl/baseurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  changePersonalData(body = {}, email = '', typeUser): Observable<any> {

    const type = typeUser === '1' ? '/change-personal-data-partners' : '/change-personal-data-customers';

    return this.http.put(this.baseUrl.getBaseUrl() + 'profile/' + `${email}` + type,  body);
  }

  changePassword(body = {}, email = '', typeUser): Observable<any> {

    const type = typeUser === '1' ? '/change-password-partners' : '/change-password-customers';

    return this.http.put(this.baseUrl.getBaseUrlAuthenticate() + `${email}` + type,  body);
  }

}

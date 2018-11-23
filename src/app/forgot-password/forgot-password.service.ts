import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseUrl } from '../baseurl/baseurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ForgotPasswordService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  changePassword(body = {}, email = '', typeUser): Observable<any> {

    const type = typeUser === '1' ? '/change-password-partners' : '/change-password-customers';

    return this.http.put(this.baseUrl.getBaseUrlAuthenticate() + `${email}` + type,  body);
  }

}

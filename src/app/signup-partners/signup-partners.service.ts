import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseUrl } from '../baseurl/baseurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignupService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  signup(body = {}, typeUser): Observable<any> {

    const type = typeUser === '1' ? 'signup-partners' : 'signup-customers';

    return this.http.post(this.baseUrl.getBaseUrlAuthenticate() + type,  body);
  }

}

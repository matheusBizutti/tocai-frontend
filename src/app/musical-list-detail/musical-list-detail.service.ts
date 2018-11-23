import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseUrl } from '../baseurl/baseurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MusicalListDetailService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  getMusicalListDetail(email): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + 'musical-list/email/' + `${email}`);
  }

}


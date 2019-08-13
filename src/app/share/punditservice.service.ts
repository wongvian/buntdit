import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Students } from './student';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PunditserviceService {
  urlr = 'https://bundit.snru.ac.th/api/bundit';
  constructor(private http: HttpClient) { }

  getsongall(): Observable<any> {
    return this.http
      .get<any>(this.urlr)
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

  getstd(stdid): Observable<any> {
    return this.http
      .get<any>(this.urlr + '/' + stdid)
      .catch((errorResponse: HttpErrorResponse) => {
        return Observable.throw(errorResponse);
      });
  }

}

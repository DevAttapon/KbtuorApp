import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _BASE_API = 'api url ....';
  constructor(private http: HttpClient) {
  }

  // Call API ......
  getData(url: string): any {

    return this.http.get(this._BASE_API + url).pipe(
      map(res => {
        if (!res) {
          throw new Error('Value expected!');
        }
        return res;
      }),
      catchError(err => err)
    );
  }
  postData(url: string, data: any): any {
    return this.http.post<any>(this._BASE_API + url, data).pipe(
      map(res => {
        if (!res) {
          throw new Error('Value expected!');
        }
        return res;
      }),
      catchError(err => err)
    );
  }


  putData(url: string, data: any): any {

    return this.http.put(this._BASE_API + url, data).pipe(
      map(res => {
        if (!res) {
          throw new Error('Value expected!');
        }
        return res;
      }),
      catchError(err => err)
    );
  }
}




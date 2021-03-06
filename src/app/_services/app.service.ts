import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _BASE_API = 'http://127.0.0.1:8000/api';
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
  delData(url: string): any {

    return this.http.delete(this._BASE_API + url).pipe(
      map(res => {
        if (!res) {
          throw new Error('Value expected!');
        }
        return res;
      }),
      catchError(err => err)
    );
  }

   upload(url, data) {

    return this.http.post<any>(this._BASE_API + url, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
}




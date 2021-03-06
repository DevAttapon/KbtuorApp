import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private  userAcc: any = [{username: ''}];

    constructor(private http: HttpClient, private appservice: AppService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): any {
      // Test
      console.log(username);
      console.log(password);
      if (username === 'user.dummy@gmail.com' && password === 'user.dummy1234') {

        this.userAcc[0].username = username;
        localStorage.setItem('currentUser', JSON.stringify(this.userAcc));
        this.currentUserSubject.next(this.userAcc[0]);
      }
      return this.userAcc[0];

      // Development

        // return this.http.post<any>('/users/authenticate', { username, password })
        //     .pipe(map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //             this.currentUserSubject.next(user);
        //         }

        //         return user;
        //     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}

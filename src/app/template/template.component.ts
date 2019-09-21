import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import $ from 'jquery';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';
import { first } from 'rxjs/operators';
import { AppService } from '../_services';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  currentUser: User;
  items: MenuItem[];
  chkForm = true;
  userAuth = false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private _service: AppService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    console.log('Cureent User : ' , this.currentUser);
}

  ngOnInit() {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }


  userLogin (): void {
    // test
    const user =  this.authenticationService.login('user.dummy@gmail.com', 'user.dummy1234');
    console.log('Cureent User : ' , this.currentUser);

    /// development

    // this.authenticationService.login('user.dummy@gmail.com', 'user.dummy1234').pipe(first())
    // .subscribe(
    //     data => {
    //         // condition here
    //     },
    //     error => {
    //       //  error condition here
    //     });
    this.userAuth = true;
  }
  userLogout(): void {
    this.authenticationService.logout();
    this.userAuth = false;
    this.router.navigate(['/']);
  }



  myFunction () {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
      // $('.topnav.responsive a ').slideDown(1000);

    } else {
      x.className = 'topnav';
    }
  }


  formToggle () {
      if (this.chkForm) {
        this.chkForm = false;
      } else {
        this.chkForm = true;
      }
  }


}

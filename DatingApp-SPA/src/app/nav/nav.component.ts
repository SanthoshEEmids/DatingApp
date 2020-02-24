import { AlertifyService } from './../_services/alertify.service';
import { error } from 'util';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
      .subscribe(next => {
        this.alertify.success('Logged in Successfully');
      },
        // tslint:disable-next-line: no-shadowed-variable
        error => {
          this.alertify.error(error);
        }, () => {
          this.router.navigate(['/members']);
        });
  }
  loggedIn() {
    return this.authService.loggedIn();
  }
  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('User logged out');
    this.model = null;
    this.router.navigate(['/home']);
  }

}

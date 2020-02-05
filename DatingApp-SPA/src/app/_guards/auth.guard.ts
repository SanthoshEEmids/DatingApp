import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    // tslint:disable-next-line: align
    private alertify: AlertifyService,
    // tslint:disable-next-line: align
    private router: Router
  ) { }
  canActivate(): boolean {
    if (this.authService.loggedIn()) { return true; }
    this.alertify.error('Not authorized to access !!');
    this.router.navigate(['/home']);
    return false;

  }

}

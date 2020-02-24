import { AlertifyService } from './../../../_services/alertify.service';
import { UserService } from './../../../_services/user.service';
import { User } from './../../../_models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private alertifyService: AlertifyService,
    // tslint:disable-next-line: align
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }
  loadUser() {
    // tslint:disable-next-line: no-string-literal
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
      // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertifyService.error(error);
    });
  }
}

import { error } from 'util';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertifyService.error(error);
    });
  }

}

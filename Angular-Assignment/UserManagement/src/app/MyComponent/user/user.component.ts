import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/MyServices/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: Array<any> = [];
  type: boolean = false;
  constructor(private user: UsersService, private router: Router) {
    this.users = this.user.getData();
  }

  deleteUser(id: any) {
    this.user.deleteUser(id);
  }

  activateUser(id: any) {
    this.user.activateUser(id);
  }
  hasRoute(route: string) {
    // console.log(this.router.url === '/');

    return this.router.url.includes(route);
  }
  ngOnInit(): void {}
}

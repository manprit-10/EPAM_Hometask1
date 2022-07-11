import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'User Management';
  message = ' Welcome to Users Management System';

  constructor(private router: Router) {}

  hasRoute(route: string) {
    // console.log(this.router.url === '/');

    return this.router.url.includes(route);
  }
}

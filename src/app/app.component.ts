import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';
  users: Array<any> = [];

  constructor(
    private usersService: UserService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((response) => {
        this.users = response;
      }, (err) => {
        console.log(err);
      });
  }

  public generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }
}

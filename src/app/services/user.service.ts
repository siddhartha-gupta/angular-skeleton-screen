import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UserService {
  constructor() { }

  getUsers() {
    const fakeResponse = [{
      name: 'User 1',
      email: 'a@a.com',
      country: 'India'
    },
    {
      name: 'User 2',
      email: 'b@a.com',
      country: 'USA'
    }, {
      name: 'User 3',
      email: 'c@a.com',
      country: 'Sweden'
    },
    {
      name: 'User 4',
      email: 'd@a.com',
      country: 'UK'
    }];

    return Observable.of(fakeResponse).delay(5000);
  }
}

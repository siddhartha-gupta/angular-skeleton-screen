import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

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

    return of(fakeResponse).pipe(delay(5000));
  }
}

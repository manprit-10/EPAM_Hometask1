import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  beforeEach(() => {
    service = new UsersService();
  });
  const dummylist = {
    User: [
      {
        id: '1',
        firstName: 'One',
        lastName: 'User',
        age: 30,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '2',
        firstName: 'Two',
        lastName: 'User',
        age: 21,
        login: 'yes',
        password: '12345',
        isDeleted: true,
      },
      {
        id: '3',
        firstName: 'Three',
        lastName: 'User',
        age: 26,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '4',
        firstName: 'Four',
        lastName: 'User',
        age: 22,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '5',
        firstName: 'Five',
        lastName: 'User',
        age: 24,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '6',
        firstName: 'Six',
        lastName: 'User',
        age: 15,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
      {
        id: '7',
        firstName: 'Seven',
        lastName: 'User',
        age: 10,
        login: 'yes',
        password: '12345',
        isDeleted: true,
      },
      {
        id: '8',
        firstName: 'Eight',
        lastName: 'User',
        age: 20,
        login: 'yes',
        password: '12345',
        isDeleted: false,
      },
    ],
  };

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // My testing
  it('User array data should be length 8', () => {
    expect(service.getData().length).toBeGreaterThanOrEqual(8);
  });

  it('user data should be Equal to Dummy data', () => {
    expect(service.getData()).toEqual(dummylist.User);
  });

  it('Must have the user interface type', () => {
    service.getData().map((res: any) => {
      expect(
        res.id && res.firstName && res.lastName && res.login && res.password
      ).toBeInstanceOf(String);
      expect(res.isDeleted).toBeInstanceOf(Boolean);
      expect(res.age).toBeInstanceOf(Number);
    });
  });
});

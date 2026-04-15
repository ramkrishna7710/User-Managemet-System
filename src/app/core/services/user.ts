import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
   // 🔥 Fake database (for now)
  users = [
    { _id: '1', name: 'Admin', email: 'admin@gmail.com', role: 'admin' },
    { _id: '2', name: 'User1', email: 'user1@gmail.com', role: 'user' }
  ];

  getUsers() {
    return of(this.users);
  }

  createUser(user: any) {
    user._id = Date.now().toString();
    this.users.push(user);
    return of(user);
  }

  deleteUser(id: string) {
    this.users = this.users.filter(u => u._id !== id);
    return of(true);
  }
}

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { User } from '../../../core/services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: any[] = [];
  editingUser: any = null;

  newUser = {
    name: '',
    email: '',
    role: 'user'
  };

  constructor(private userService: User) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

   addUser() {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { name: '', email: '', role: 'user' };
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  startEdit(user: any) {
    this.editingUser = { ...user };
  }
  
  updateUser() {
    const index = this.users.findIndex(u => u._id === this.editingUser._id);
    this.users[index] = this.editingUser;
    this.editingUser = null;
  }
}

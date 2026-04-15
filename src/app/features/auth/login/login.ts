import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  login() {
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
      }

      if (res.role === 'admin') {
        this.router.navigate(['/admin/users']);
      } else {
        this.router.navigate(['/profile']);
      }
    });
  }
  
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
    login(data: any) {

    // 🔥 TEMP FAKE LOGIN (no backend yet)
    if (data.email === 'admin@gmail.com') {
      return of({
        token: '123',
        role: 'admin'
      });
    } else {
      return of({
        token: '123',
        role: 'user'
      });
    }
  }
}

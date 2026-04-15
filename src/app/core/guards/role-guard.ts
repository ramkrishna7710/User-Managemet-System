import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  // return true;
   return localStorage.getItem('role') === 'admin';
};

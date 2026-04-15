import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  // return true;
  if (typeof window !== 'undefined') {
    return localStorage.getItem('role') === 'admin';
  }
  return false;
};

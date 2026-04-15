import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // return true;
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem('token');
  }
  return false;

};


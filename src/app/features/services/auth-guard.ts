import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  } else {
    alert('You must be logged in to access this page.');
    router.navigate(['/home']);
    return false;
  }
};

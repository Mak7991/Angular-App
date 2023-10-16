import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).loggedIn()) {
    return true;
  } else {
    inject(Router).navigate(['/login']);
    alert('Please Login First to View Page')
    return false;
  }
};

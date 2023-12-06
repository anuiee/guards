import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const adimnAuthGuard: CanActivateFn = (route, state) => {


  const service=inject(AuthService);
  const router=inject(Router);
 
if (service.isAuthenticatedUser()) {
  return true;
} else {
  // Redirect to the login page if not authenticated
  return false;
}
 
};

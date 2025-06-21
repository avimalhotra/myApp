import { CanActivateFn, CanActivateChildFn, CanMatchFn } from '@angular/router';

export const authGuard: CanMatchFn = (route, state) => {
  return true;
};



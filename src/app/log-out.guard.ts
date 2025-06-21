import { CanDeactivateFn } from '@angular/router';

export const logOutGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};

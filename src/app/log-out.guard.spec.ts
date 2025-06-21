import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { logOutGuard } from './log-out.guard';

describe('logOutGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logOutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

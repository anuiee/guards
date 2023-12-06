import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adimnAuthGuard } from './adimn-auth.guard';

describe('adimnAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adimnAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ClienteDeactivateGuard } from './cliente.deactivate.guard';

describe('ClienteDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClienteDeactivateGuard]
    });
  });

  it('should be created', inject([ClienteDeactivateGuard], (guard: ClienteDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

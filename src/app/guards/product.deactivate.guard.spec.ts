import { TestBed, inject } from '@angular/core/testing';

import { ProductDeactivateGuard } from './product.deactivate.guard';

describe('ProductDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDeactivateGuard]
    });
  });

  it('should be created', inject([ProductDeactivateGuard], (guard: ProductDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ProductGuard } from './product.guard';

describe('ProductGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGuard]
    });
  });

  it('should be created', inject([ProductGuard], (guard: ProductGuard) => {
    expect(guard).toBeTruthy();
  }));
});

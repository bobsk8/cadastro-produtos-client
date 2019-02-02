import { TestBed, inject } from '@angular/core/testing';

import { UserTransformService } from './user-transform.service';

describe('UserTransformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTransformService]
    });
  });

  it('should be created', inject([UserTransformService], (service: UserTransformService) => {
    expect(service).toBeTruthy();
  }));
});

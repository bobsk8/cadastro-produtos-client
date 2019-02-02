import { TestBed, inject } from '@angular/core/testing';

import { LoginTransformService } from './login-transform.service';

describe('LoginTransformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginTransformService]
    });
  });

  it('should be created', inject([LoginTransformService], (service: LoginTransformService) => {
    expect(service).toBeTruthy();
  }));
});

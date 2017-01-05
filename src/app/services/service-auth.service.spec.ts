/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceAuthService } from './service-auth.service';

describe('Service: ServiceAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceAuthService]
    });
  });

  it('should ...', inject([ServiceAuthService], (service: ServiceAuthService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceFirebaseService } from './service-firebase.service';

describe('Service: ServiceFirebase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceFirebaseService]
    });
  });

  it('should ...', inject([ServiceFirebaseService], (service: ServiceFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});

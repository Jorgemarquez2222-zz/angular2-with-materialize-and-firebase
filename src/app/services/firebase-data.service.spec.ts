/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebaseDataService } from './firebase-data.service';

describe('Service: FirebaseData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseDataService]
    });
  });

  it('should ...', inject([FirebaseDataService], (service: FirebaseDataService) => {
    expect(service).toBeTruthy();
  }));
});

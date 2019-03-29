import { TestBed } from '@angular/core/testing';

import { CustomersServiceService } from './customers-service.service';

describe('CustomersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomersServiceService = TestBed.get(CustomersServiceService);
    expect(service).toBeTruthy();
  });
});

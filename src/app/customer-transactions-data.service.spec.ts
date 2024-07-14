import { TestBed } from '@angular/core/testing';

import { CustomerTransactionsDataService } from './customer-transactions-data.service';

describe('CustomerTransactionsDataService', () => {
  let service: CustomerTransactionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerTransactionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

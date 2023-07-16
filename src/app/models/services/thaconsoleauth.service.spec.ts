import { TestBed } from '@angular/core/testing';

import { ThaconsoleauthService } from './thaconsoleauth.service';

describe('ThaconsoleauthService', () => {
  let service: ThaconsoleauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThaconsoleauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

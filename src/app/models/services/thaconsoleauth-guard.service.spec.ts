import { TestBed } from '@angular/core/testing';

import { ThaconsoleauthGuardService } from './thaconsoleauth-guard.service';

describe('ThaconsoleauthGuardService', () => {
  let service: ThaconsoleauthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThaconsoleauthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

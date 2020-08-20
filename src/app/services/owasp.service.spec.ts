import { TestBed } from '@angular/core/testing';

import { OWASPService } from './owasp.service';

describe('OWASPService', () => {
  let service: OWASPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OWASPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

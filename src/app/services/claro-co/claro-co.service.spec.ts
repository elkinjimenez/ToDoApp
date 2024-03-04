import { TestBed } from '@angular/core/testing';

import { ClaroCoService } from './claro-co.service';

describe('ClaroCoService', () => {
  let service: ClaroCoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaroCoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

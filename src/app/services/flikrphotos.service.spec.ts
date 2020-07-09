import { TestBed } from '@angular/core/testing';

import { FlikrphotosService } from './flikrphotos.service';

describe('FlikrphotosService', () => {
  let service: FlikrphotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(FlikrphotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

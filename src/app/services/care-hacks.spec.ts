import { TestBed } from '@angular/core/testing';

import { CareHacks } from './care-hacks.service.ts';

describe('CareHacks', () => {
  let service: CareHacks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareHacks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

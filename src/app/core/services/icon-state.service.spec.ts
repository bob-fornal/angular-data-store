import { TestBed } from '@angular/core/testing';

import { IconStateService } from './icon-state.service';

describe('IconStateService', () => {
  let service: IconStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

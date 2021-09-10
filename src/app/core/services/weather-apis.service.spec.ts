import { TestBed } from '@angular/core/testing';

import { WeatherApisService } from './weather-apis.service';

describe('WeatherApisService', () => {
  let service: WeatherApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

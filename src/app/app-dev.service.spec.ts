import { TestBed } from '@angular/core/testing';

import { AppDevService } from './app-dev.service';

describe('AppDevService', () => {
  let service: AppDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

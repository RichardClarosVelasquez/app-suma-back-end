import { TestBed } from '@angular/core/testing';

import { SumatoriaService } from './sumatoria.service';

describe('SumatoriaService', () => {
  let service: SumatoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumatoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

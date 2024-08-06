import { TestBed } from '@angular/core/testing';

import { HabilitacionConsultorService } from './habilitacion-consultor.service';

describe('HabilitacionConsultorService', () => {
  let service: HabilitacionConsultorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilitacionConsultorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

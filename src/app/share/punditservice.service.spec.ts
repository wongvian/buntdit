import { TestBed, inject } from '@angular/core/testing';

import { PunditserviceService } from './punditservice.service';

describe('PunditserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PunditserviceService]
    });
  });

  it('should be created', inject([PunditserviceService], (service: PunditserviceService) => {
    expect(service).toBeTruthy();
  }));
});

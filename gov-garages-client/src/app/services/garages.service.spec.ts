import { TestBed } from '@angular/core/testing';

import { GaragesService } from './garages.service';

describe('garagesService', () => {
  let service: GaragesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaragesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

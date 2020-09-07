import { TestBed } from '@angular/core/testing';

import { NgPzService } from './ng-pz.service';

describe('NgPzService', () => {
  let service: NgPzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpLinkService } from './http-link.service';

describe('HttpLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpLinkService = TestBed.get(HttpLinkService);
    expect(service).toBeTruthy();
  });
});

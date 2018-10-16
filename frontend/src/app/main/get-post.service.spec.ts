import { TestBed } from '@angular/core/testing';

import { GetPostService } from './get-post.service';

describe('GetPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPostService = TestBed.get(GetPostService);
    expect(service).toBeTruthy();
  });
});

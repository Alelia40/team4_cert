import { TestBed } from '@angular/core/testing';

import { FetchNewsService } from './fetch-news.service';

describe('FetchNewsService', () => {
  let service: FetchNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

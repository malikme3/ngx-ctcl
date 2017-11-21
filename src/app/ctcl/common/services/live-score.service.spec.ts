import { TestBed, inject } from '@angular/core/testing';

import { LiveScoreService } from './live-score.service';

describe('LiveScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveScoreService]
    });
  });

  it('should be created', inject([LiveScoreService], (service: LiveScoreService) => {
    expect(service).toBeTruthy();
  }));
});

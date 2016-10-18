/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { TrailsService } from './trails.service';

describe('TrailsService', () => {
  beforeEachProviders(() => [TrailsService]);

  it('should ...',
      inject([TrailsService], (service: TrailsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'src/assets/test/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  })().then(done).catch(done.fail));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

import { TestBed } from '@angular/core/testing';

import { SpinnerInterceptorService } from './spinner-interceptor.service';
import { of } from 'rxjs';
import { configureTestSuite } from 'src/app/shared/test/testing';

describe('SpinnerInterceptorService', () => {
  let service: SpinnerInterceptorService;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerInterceptorService);
  })().then(done).catch(done.fail));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should intercept call and add http to array', () => {
    service.intercept({
      clone: () => true, url: 'test', headers: {
        keys: () => [], has: () => false, append: () => 'test'
      }
    } as any, { handle: () => of(true) } as any).subscribe(result => true);
    expect(service.requests.length).toBe(0);
  });

  it('should intercept call and add http to array and has key', () => {
    service.intercept({
      clone: () => true, url: 'test', headers: {
        keys: () => [], has: () => true,
        append: () => 'test'
      }
    } as any, { handle: () => of(true) } as any).subscribe(result => true);
    expect(service.requests.length).toBe(0);
  });

  it('should intercept call and add http to array and has key with value LOADER', () => {
    service.intercept({
      clone: (params) => true, url: 'test', headers: {
        keys: () => ['NO_LOADER'], has: () =>
          true, append: () => 'test'
      }
    } as any, { handle: () => of(true) } as any).subscribe(result => true);
    expect(service.requests.length).toBe(0);
  });

  it('should intercept call and add http to array and has key with value not LOADER', () => {
    service.intercept({
      clone: (params) => true, url: 'test', headers: {
        get: () => 'test', keys: () =>
          ['other'],
        has: () => true
      }, has: () => true, append: () => 'test'
    } as any, { handle: () => of(true) } as any).subscribe(result => true);
    expect(service.requests.length).toBe(0);
  });
});

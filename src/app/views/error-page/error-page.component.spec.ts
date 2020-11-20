import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'src/assets/test/testing';

import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent;
  let fixture: ComponentFixture<ErrorPageComponent>;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      declarations: [ErrorPageComponent]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'src/app/shared/test/testing';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

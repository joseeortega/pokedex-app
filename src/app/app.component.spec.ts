import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'src/app/shared/test/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  configureTestSuite();

  beforeAll((done) =>
    (async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent],
      }).compileComponents();
    })()
      .then(done)
      .catch(done.fail)
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

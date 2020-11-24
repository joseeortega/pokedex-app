import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { configureTestSuite } from 'src/app/shared/test/testing';

import { PokemonFilterComponent } from './pokemon-filter.component';

describe('PokemonFilterComponent', () => {
  let component: PokemonFilterComponent;
  let fixture: ComponentFixture<PokemonFilterComponent>;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
      ],
      declarations: [PokemonFilterComponent]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event with form values entered', fakeAsync(() => {

    expect(component).toBeTruthy();
    fixture.detectChanges();

    spyOn(component.searchActionEvent, 'emit');

    component.filterForm.get('name').setValue('char');

    const filterEntered = { name: 'char' };

    tick(500);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.searchActionEvent.emit).toHaveBeenCalledWith(filterEntered);
    });

  }));

});

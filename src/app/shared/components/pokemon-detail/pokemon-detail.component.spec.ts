import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'src/assets/test/testing';
import { POKEMON_DETAIL_MOCK } from '../../mocks/models/pokemon.mock';

import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  configureTestSuite();

  beforeAll(done => (async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PokemonDetailComponent
      ]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    component.pokemon = POKEMON_DETAIL_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event', () => {
    spyOn(component.closeDetailEvent, 'emit');
    component.closeDetail();
    expect(component.closeDetailEvent.emit).toHaveBeenCalled();
  });
});

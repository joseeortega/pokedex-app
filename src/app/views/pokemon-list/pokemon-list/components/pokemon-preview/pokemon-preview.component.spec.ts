import { ComponentFixture, TestBed } from '@angular/core/testing';
import { POKEMON_PREVIEW_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { configureTestSuite } from 'src/app/shared/test/testing';

import { PokemonPreviewComponent } from './pokemon-preview.component';

describe('PokemonPreviewComponent', () => {
  let component: PokemonPreviewComponent;
  let fixture: ComponentFixture<PokemonPreviewComponent>;

  configureTestSuite();

  beforeAll(done => (async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonPreviewComponent]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPreviewComponent);
    component = fixture.componentInstance;
    component.pokemon = POKEMON_PREVIEW_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

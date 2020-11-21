import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { configureTestSuite } from 'dist/pokedex-app/assets/test/testing';
import { POKEMON_DETAIL_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { PokedexDataMockService } from 'src/app/shared/mocks/services/pokedex-data/pokedex-data.mock.service';
import { PokedexDataService } from 'src/app/shared/services/pokedex/pokedex-data.service';

import { PokemonDetailService } from './pokemon-detail.service';

let httpTestingController: HttpTestingController;
let service: PokemonDetailService;

describe('PokemonDetailService', () => {

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: PokedexDataService, useClass: PokedexDataMockService },
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonDetailService);

  })().then(done).catch(done.fail));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Pokemon', () => {
    service.getPokemon('ivysaur').subscribe(res => {
      expect(res).toEqual(POKEMON_DETAIL_MOCK);
    });
  });
});

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokedexDataMockService } from 'src/app/shared/mocks/services/pokedex-data/pokedex-data.mock.service';
import { PokedexDataService } from 'src/app/shared/services/pokedex/pokedex-data.service';
import { configureTestSuite } from 'src/app/shared/test/testing';

import { PokemonListService } from './pokemon-list.service';

let httpTestingController: HttpTestingController;
let service: PokemonListService;

describe('PokemonListService', () => {

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
    service = TestBed.inject(PokemonListService);
  })().then(done).catch(done.fail));

  afterEach(() => {
    httpTestingController.verify();

    service.pagination = {
      pageIndex: 0,
      pageSize: 25,
    };
    service.pokemons = [];
    service.pokemonsFiltered.next([]);
    service.filterForm = { name: '' };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the first generation Pokemon', () => {
    service.getPokemons();
    expect(service.pokemons.length).toEqual(151);
    expect(service.pokemonsFiltered.getValue().length).toEqual(25);
  });

  it('should set list as completed and avoid last call', () => {
    service.getPokemons();
    expect(service.pokemonsFiltered.getValue().length).toEqual(25);
    service.getMorePokemons();
    expect(service.pokemonsFiltered.getValue().length).toEqual(50);
  });

  it('should set filter by char', () => {
    service.getPokemons();
    expect(service.pokemonsFiltered.getValue().length).toEqual(25);
    service.filterPokemons({ name: 'char' });
    expect(service.pokemonsFiltered.getValue().length).toEqual(3);
  });

});

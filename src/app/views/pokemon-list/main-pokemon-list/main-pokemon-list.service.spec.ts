import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { PokedexDataMockService } from 'src/app/shared/mocks/services/pokedex-data/pokedex-data.mock.service';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokedexDataService } from 'src/app/shared/services/pokedex/pokedex-data.service';
import { configureTestSuite } from 'src/assets/test/testing';

import { MainPokemonListService } from './main-pokemon-list.service';

let httpTestingController: HttpTestingController;
let service: MainPokemonListService;

fdescribe('MainPokemonListService', () => {

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
    service = TestBed.inject(MainPokemonListService);
  })().then(done).catch(done.fail));

  afterEach(() => {
    httpTestingController.verify();
    service = TestBed.inject(MainPokemonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return first Pokemons', () => {
    service.getInitialPokemons();
    expect(service.pokemons.getValue().length).toEqual(20);
  });

  it('should return more Pokemons', () => {
    service.getInitialPokemons();
    expect(service.pokemons.getValue().length).toEqual(20);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(40);
  });

  it('should set list as completed', () => {
    service.getInitialPokemons();
    expect(service.pokemons.getValue().length).toEqual(20);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(40);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(60);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(80);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(100);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(120);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(140);
    service.getMorePokemons();
    expect(service.pokemons.getValue().length).toEqual(141);
  });

});

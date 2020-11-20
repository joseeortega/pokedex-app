import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { POKEMON_DETAIL_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { PokedexMockService } from 'src/app/shared/mocks/services/pokedex/pokedex.mock.service';
import { configureTestSuite } from 'src/assets/test/testing';
import { PokedexService } from '../pokedex.service';

import { PokemonDetailResolverService } from './pokemon-detail-resolver.service';

describe('PokemonDetailResolverService', () => {
  let resolver: PokemonDetailResolverService;
  let route: ActivatedRouteSnapshot;
  let pokedexService: PokedexService;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: PokedexService, useClass: PokedexMockService }
      ]
    });

    route = new ActivatedRouteSnapshot();
    pokedexService = TestBed.inject(PokedexService);
    resolver = TestBed.inject(PokemonDetailResolverService);
  })().then(done).catch(done.fail));

  it('should be created', () => {
    const service: PokemonDetailResolverService = TestBed.inject(PokemonDetailResolverService);
    expect(service).toBeTruthy();
  });

  it('should resolve pokemon detail', () => {

    const resolved = resolver.resolve(route, null);
    resolved.subscribe((response) => {
      expect(response).toEqual(POKEMON_DETAIL_MOCK);
    });

  });

});

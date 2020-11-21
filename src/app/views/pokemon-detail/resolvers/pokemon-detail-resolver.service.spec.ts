import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { POKEMON_DETAIL_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { PokemonDetailMockService } from 'src/app/shared/mocks/services/pokemon-detail/pokemon-detail.mock.service';
import { configureTestSuite } from 'src/app/shared/test/testing';
import { PokemonDetailService } from '../pokemon-detail/pokemon-detail.service';

import { PokemonDetailResolverService } from './pokemon-detail-resolver.service';

describe('PokemonDetailResolverService', () => {
  let resolver: PokemonDetailResolverService;
  let route: ActivatedRouteSnapshot;
  let mainPokemonDetailService: PokemonDetailService;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: PokemonDetailService, useClass: PokemonDetailMockService }
      ]
    });

    route = new ActivatedRouteSnapshot();
    mainPokemonDetailService = TestBed.inject(PokemonDetailService);
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

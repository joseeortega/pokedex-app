import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { POKEMON_DETAIL_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { MainPokemonDetailMockService } from 'src/app/shared/mocks/services/main-pokemon-detail/main-pokemon-detail.mock.service';
import { MainPokemonDetailService } from 'src/app/views/pokemon-detail/main-pokemon-detail/main-pokemon-detail.service';
import { configureTestSuite } from 'src/assets/test/testing';


import { PokemonDetailResolverService } from './pokemon-detail-resolver.service';

describe('PokemonDetailResolverService', () => {
  let resolver: PokemonDetailResolverService;
  let route: ActivatedRouteSnapshot;
  let mainPokemonDetailService: MainPokemonDetailService;

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: MainPokemonDetailService, useClass: MainPokemonDetailMockService }
      ]
    });

    route = new ActivatedRouteSnapshot();
    mainPokemonDetailService = TestBed.inject(MainPokemonDetailService);
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

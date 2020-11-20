import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokedexService } from './pokedex.service';
import { environment } from 'src/environments/environment';
import { configureTestSuite } from 'src/assets/test/testing';
import { POKEMON_LIST_MOCK, POKEMON_LIST_RESPONSE_MOCK, POKEMON_DETAIL_MOCK, POKEMON_DETAIL_RESPONSE_MOCK } from '../../mocks/models/pokemon.mock';

let httpTestingController: HttpTestingController;
let service: PokedexService;

describe('PokedexService', () => {

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokedexService);
  })().then(done).catch(done.fail));

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all Pokemons', () => {
    service.getPokemons(0, 20).subscribe(res => {
      expect(res).toEqual(POKEMON_LIST_MOCK);
      expect(res[0]).toEqual(POKEMON_LIST_MOCK[0]);
    });
    const request = httpTestingController.expectOne(`${environment.pokemonApi}?offset=0&limit=20`);
    request.flush(POKEMON_LIST_RESPONSE_MOCK);
  });

  it('should return a Pokemons', () => {
    service.getPokemon('ivysaur').subscribe(res => {
      expect(res).toEqual(POKEMON_DETAIL_MOCK);
    });
    const request = httpTestingController.expectOne(`${environment.pokemonApi}ivysaur`);
    request.flush(POKEMON_DETAIL_RESPONSE_MOCK);
  });

});

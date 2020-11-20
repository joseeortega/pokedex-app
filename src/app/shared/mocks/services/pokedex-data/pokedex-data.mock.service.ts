import { of, Observable } from 'rxjs';
import { POKEMON_DETAIL_RESPONSE_MOCK, POKEMON_LIST_RESPONSE_MOCK } from '../../models/pokemon.mock';

export class PokedexDataMockService {

  getPokemons(offset: number, limit: number): Observable<any> {
    return of(POKEMON_LIST_RESPONSE_MOCK);
  }

  getPokemonByName(name: string): Observable<any> {
    return of(POKEMON_DETAIL_RESPONSE_MOCK);
  }

}

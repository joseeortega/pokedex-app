import { of, Observable } from 'rxjs';
import { POKEMON_DETAIL_MOCK, POKEMON_LIST_MOCK } from '../models/pokemon.mock';

export class PokedexMockService {

  getPokemons(offset: number, limit: number): Observable<any> {
    return of(POKEMON_LIST_MOCK);
  }

  getPokemon(name: string): Observable<any> {
    return of(POKEMON_DETAIL_MOCK);
  }

}

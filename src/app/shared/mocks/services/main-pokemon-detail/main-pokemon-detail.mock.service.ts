import { of, Observable } from 'rxjs';
import { POKEMON_DETAIL_MOCK } from '../../models/pokemon.mock';

export class MainPokemonDetailMockService {

  getPokemon(name: string): Observable<any> {
    return of(POKEMON_DETAIL_MOCK);
  }

}

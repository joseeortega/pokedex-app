import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Pokemon, PokemonDetail } from '../models/pokemon.model';
import { PokemonImageResolver } from '../helpers/pokemon-image-resolver';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  /**
   * Get Pokemon List
   * @param offset offset number elements
   * @param limit number of elements to get
   */
  getPokemons(offset: number, limit: number): Observable<any> {
    const endpoint = `${environment.pokemonApi}?offset=${offset}&limit=${limit}`;
    return this.http.get(endpoint).pipe(
      map((response: any) => response.results.map(pokemon => {
        return {
          id: null,
          name: pokemon.name,
          imgUrl: PokemonImageResolver.getUrlImageByName(pokemon.name)
        } as Pokemon;
      })));
  }

  /**
   * Get Pokemon by name
   * @param name name param
   */
  getPokemon(name: string): Observable<any> {
    const endpoint = `${environment.pokemonApi}${name}`;
    return this.http.get(endpoint).pipe(
      map((pokemonResponse: any) => {
        return {
          id: pokemonResponse.id,
          name: pokemonResponse.name,
          imgUrl: PokemonImageResolver.getUrlImageByName(pokemonResponse.name),
          types: pokemonResponse.types.map((typeElement: any) => {
            return typeElement.type.name;
          }),
          height: pokemonResponse.height,
          abilities: pokemonResponse.abilities.map((abilityElement: any) => {
            return abilityElement.ability.name;
          }),
        } as PokemonDetail;
      }));
  }

}

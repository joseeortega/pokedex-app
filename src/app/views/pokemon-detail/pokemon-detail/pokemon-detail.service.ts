import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonImageHelper } from 'src/app/shared/helpers/pokemon-image-helper';
import { PokemonDetail } from 'src/app/shared/models/pokemon.model';
import { PokedexDataService } from 'src/app/shared/services/pokedex/pokedex-data.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {
  constructor(private pokedexDataService: PokedexDataService) { }

  /**
   * Get Pokemon by name
   * @param name name param
   */
  getPokemon(name: string): Observable<any> {
    return this.pokedexDataService.getPokemonByName(name).pipe(
      map((pokemonResponse: any) => {
        return {
          id: pokemonResponse.id,
          name: pokemonResponse.name,
          imgUrl: PokemonImageHelper.getUrlImageByName(pokemonResponse.name),
          types: pokemonResponse.types.map((typeElement: any) => {
            return typeElement.type.name;
          }),
          height: pokemonResponse.height,
          abilities: pokemonResponse.abilities.map((abilityElement: any) => {
            return abilityElement.ability.name;
          }),
        } as PokemonDetail;
      })
    );
  }
}

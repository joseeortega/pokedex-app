import { environment } from 'src/environments/environment';

export class PokemonImageHelper {
  constructor() {}

  static getUrlImageByName(name: string): string {
    return environment.pokemonUrlImage.replace('{name}', name);
  }
}

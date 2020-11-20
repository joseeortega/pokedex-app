import { environment } from 'src/environments/environment';

export class PokemonImageResolver {

    constructor() { }

    static getUrlImageByName(name: string): string {
        return environment.pokemonUrlImage.replace('{name}', name);
    }

}

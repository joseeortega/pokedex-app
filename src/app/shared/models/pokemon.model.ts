export interface Pokemon {
    id: number;
    name: string;
    imgUrl: string;
}

export interface PokemonDetail extends Pokemon {
    types: string[];
    height: number;
    abilities: string[];
}

export class PokemonFilter {

    constructor(
        public name?: string,
    ) {
    }
}

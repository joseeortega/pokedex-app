import { PokemonImageResolver } from './pokemon-image-resolver';

describe('PokemonImageResolver', () => {

    it('should return resolved pokemon url image', () => {
        expect(PokemonImageResolver.getUrlImageByName('ludiccolo')).toEqual('https://img.pokemondb.net/sprites/black-white/anim/normal/ludiccolo.gif');
    });

});

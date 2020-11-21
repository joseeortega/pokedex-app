import { PokemonImageHelper } from './pokemon-image-helper';

describe('PokemonImageHelper', () => {
  it('should return resolved pokemon url image', () => {
    expect(PokemonImageHelper.getUrlImageByName('ludiccolo')).toEqual(
      'https://img.pokemondb.net/sprites/black-white/anim/normal/ludiccolo.gif'
    );
  });
});

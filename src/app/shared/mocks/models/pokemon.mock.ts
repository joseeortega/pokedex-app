import { Pokemon, PokemonDetail } from '../../models/pokemon.model';

export const POKEMON_DETAIL_MOCK =
    {
        id: 2,
        abilities: [
            'overgrow',
            'chlorophyll'
        ],
        height: 10,
        imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
        name: 'ivysaur',
        types: [
            'grass',
            'poison'
        ]
    } as PokemonDetail;

export const POKEMON_PREVIEW_MOCK =
    {
        id: 2,
        imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif',
        name: 'ivysaur',
    } as Pokemon;

export const POKEMON_LIST_MOCK =
    [
        {
            id: null,
            name: 'bulbasaur',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif'
        },
        {
            id: null,
            name: 'ivysaur',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif'
        },
        {
            id: null,
            name: 'venusaur',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif'
        },
        {
            id: null,
            name: 'charmander',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif'
        },
        {
            id: null,
            name: 'charmeleon',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif'
        },
        {
            id: null,
            name: 'charizard',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif'
        },
        {
            id: null,
            name: 'squirtle',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif'
        },
        {
            id: null,
            name: 'wartortle',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif'
        },
        {
            id: null,
            name: 'blastoise',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif'
        },
        {
            id: null,
            name: 'caterpie',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif'
        },
        {
            id: null,
            name: 'metapod',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif'
        },
        {
            id: null,
            name: 'butterfree',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif'
        },
        {
            id: null,
            name: 'weedle',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif'
        },
        {
            id: null,
            name: 'kakuna',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif'
        },
        {
            id: null,
            name: 'beedrill',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif'
        },
        {
            id: null,
            name: 'pidgey',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif'
        },
        {
            id: null,
            name: 'pidgeotto',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif'
        },
        {
            id: null,
            name: 'pidgeot',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif'
        },
        {
            id: null,
            name: 'rattata',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif'
        },
        {
            id: null,
            name: 'raticate',
            imgUrl: 'https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif'
        }
    ];

export const POKEMON_LIST_RESPONSE_MOCK =
{
    count: 1050,
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
    previous: null,
    results: [
        {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/'
        },
        {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/'
        },
        {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/'
        },
        {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/'
        },
        {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/'
        },
        {
            name: 'charizard',
            url: 'https://pokeapi.co/api/v2/pokemon/6/'
        },
        {
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon/7/'
        },
        {
            name: 'wartortle',
            url: 'https://pokeapi.co/api/v2/pokemon/8/'
        },
        {
            name: 'blastoise',
            url: 'https://pokeapi.co/api/v2/pokemon/9/'
        },
        {
            name: 'caterpie',
            url: 'https://pokeapi.co/api/v2/pokemon/10/'
        },
        {
            name: 'metapod',
            url: 'https://pokeapi.co/api/v2/pokemon/11/'
        },
        {
            name: 'butterfree',
            url: 'https://pokeapi.co/api/v2/pokemon/12/'
        },
        {
            name: 'weedle',
            url: 'https://pokeapi.co/api/v2/pokemon/13/'
        },
        {
            name: 'kakuna',
            url: 'https://pokeapi.co/api/v2/pokemon/14/'
        },
        {
            name: 'beedrill',
            url: 'https://pokeapi.co/api/v2/pokemon/15/'
        },
        {
            name: 'pidgey',
            url: 'https://pokeapi.co/api/v2/pokemon/16/'
        },
        {
            name: 'pidgeotto',
            url: 'https://pokeapi.co/api/v2/pokemon/17/'
        },
        {
            name: 'pidgeot',
            url: 'https://pokeapi.co/api/v2/pokemon/18/'
        },
        {
            name: 'rattata',
            url: 'https://pokeapi.co/api/v2/pokemon/19/'
        },
        {
            name: 'raticate',
            url: 'https://pokeapi.co/api/v2/pokemon/20/'
        }
    ]
};

export const POKEMON_DETAIL_RESPONSE_MOCK =
{
    abilities: [
        {
            ability: {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/'
            },
            is_hidden: false,
            slot: 1
        },
        {
            ability: {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/'
            },
            is_hidden: true,
            slot: 3
        }
    ],
    height: 10,
    id: 2,
    name: 'ivysaur',
    types: [
        {
            slot: 1,
            type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/'
            }
        },
        {
            slot: 2,
            type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
            }
        }
    ]
};

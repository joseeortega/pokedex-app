import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ArrayUtils } from 'src/app/shared/helpers/array-utils';
import { PokemonImageHelper } from 'src/app/shared/helpers/pokemon-image-helper';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Pokemon, PokemonFilter } from 'src/app/shared/models/pokemon.model';
import { PokedexDataService } from 'src/app/shared/services/pokedex/pokedex-data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService implements OnDestroy {

  /**
   * Contains the form filter values
   */
  filterForm: PokemonFilter = new PokemonFilter('');

  /**
   * Contains the Pagination Info
   */
  pagination: Pagination = {
    pageIndex: 0,
    pageSize: 25,
  };

  /**
   * Total list of Pokemons
   */
  pokemons: Pokemon[] = [];

  /**
   * Total list of Pokemons Filtered And Paginated
   */
  pokemonsFiltered: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>([]);
  pokemonsFiltered$ = this.pokemonsFiltered.asObservable();

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private pokedexDataService: PokedexDataService) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Get Initial Pokemon List
   * @param offset offset number elements
   * @param limit number of elements to get
   */
  getPokemons(): void {
    this.pokedexDataService
      .getPokemons(this.pagination.pageIndex, environment.pokemonFirstGeneration)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.pokemons = response.results.map((pokemon) => {
          return {
            id: null,
            name: pokemon.name,
            imgUrl: PokemonImageHelper.getUrlImageByName(pokemon.name),
          } as Pokemon;
        });

        this.addPokemonFiltered(ArrayUtils.paginateDataSource(this.pokemons, this.pagination));
      });
  }

  getMorePokemons(): void {
    this.pagination.pageIndex++;
    const nextPagePokemons = ArrayUtils.paginateDataSource(this.getFilteredPokemons(this.filterForm), this.pagination);
    this.addPokemonFiltered(nextPagePokemons);
  }

  filterPokemons(pokemonFilter: PokemonFilter): void {
    this.filterForm = pokemonFilter;
    this.resetSearch();
    this.addPokemonFiltered(ArrayUtils.paginateDataSource(this.getFilteredPokemons(this.filterForm), this.pagination));
  }

  private resetSearch(): void {
    this.pagination.pageIndex = 0;
    this.pokemonsFiltered.next([]);
  }

  private addPokemonFiltered(nextFilteredPokemons: Pokemon[]): void {
    this.pokemonsFiltered.next([...this.pokemonsFiltered.getValue(), ...nextFilteredPokemons]);
  }

  private getFilteredPokemons(pokemonFilter: PokemonFilter): Pokemon[] {
    return this.pokemons.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().includes(pokemonFilter.name.toLocaleLowerCase());
    });
  }

}

import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PokemonImageHelper } from 'src/app/shared/helpers/pokemon-image-helper';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokedexDataService } from 'src/app/shared/services/pokedex/pokedex-data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainPokemonListService implements OnDestroy {
  pagination: Pagination = {
    offset: 0,
    limit: 20,
  };

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * Indicates if content is being loaded to display a spinner
   */
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isLoading$ = this.isLoading.asObservable();

  /**
   * Total list of Pokemons
   */
  pokemons: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>(null);
  pokemons$ = this.pokemons.asObservable();

  /**
   * Indicates if the complete list has been loaded
   */
  private listCompleted = false;

  constructor(private pokedexDataService: PokedexDataService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Get Initial Pokemon List
   * @param offset offset number elements
   * @param limit number of elements to get
   */
  getInitialPokemons(): void {
    this.pokedexDataService
      .getPokemons(this.pagination.offset, this.pagination.limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.pokemons.next(
          response.results.map((pokemon) => {
            return {
              id: null,
              name: pokemon.name,
              imgUrl: PokemonImageHelper.getUrlImageByName(pokemon.name),
            } as Pokemon;
          })
        );
      });
  }

  getMorePokemons(): void {
    if (!this.listCompleted) {
      this.updatePokemonPagination();
      this.isLoading.next(true);
      let headers = new HttpHeaders();
      headers = headers.append('NO_LOADER', 'true');
      this.pokedexDataService
        .getPokemons(this.pagination.offset, this.pagination.limit, headers)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: any) => {
          const responsePokemons: Pokemon[] = response.results.map(
            (pokemon) => {
              return {
                id: null,
                name: pokemon.name,
                imgUrl: PokemonImageHelper.getUrlImageByName(pokemon.name),
              } as Pokemon;
            }
          );
          this.pokemons.next([
            ...this.pokemons.getValue(),
            ...responsePokemons,
          ]);

          if (
            this.pokemons.getValue().length >=
            environment.pokemonFirstGeneration
          ) {
            this.listCompleted = true;
          }
          this.isLoading.next(false);
        });
    }
  }

  private updatePokemonPagination(): void {
    this.pagination.offset = this.pokemons.getValue().length;
    const isNextOverGeneration =
      this.pagination.offset + this.pagination.limit >
      environment.pokemonFirstGeneration;
    this.pagination.limit = isNextOverGeneration
      ? environment.pokemonFirstGeneration - this.pagination.offset
      : this.pagination.limit;
  }
}

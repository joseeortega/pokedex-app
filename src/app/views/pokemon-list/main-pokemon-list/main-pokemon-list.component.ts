import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { PokedexService } from 'src/app/shared/services/pokedex/pokedex.service';
import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-pokemon-list',
  templateUrl: './main-pokemon-list.component.html',
  styleUrls: ['./main-pokemon-list.component.scss']
})
export class MainPokemonListComponent implements OnInit, OnDestroy {

  pagination: Pagination = {
    offset: 0,
    limit: 151
  };

  pokemons: Pokemon[] = [];

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public router: Router,
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.getPokedex();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToPokemonDetail(name: string): void {
    this.router.navigate(['pokemon', name]);
  }

  private getPokedex(): void {
    this.pokedexService.getPokemons(this.pagination.offset, this.pagination.limit)
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      });
  }

}

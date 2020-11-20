import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Component({
  selector: 'app-main-pokemon-list',
  templateUrl: './main-pokemon-list.component.html',
  styleUrls: ['./main-pokemon-list.component.scss']
})
export class MainPokemonListComponent implements OnInit {

  pagination: Pagination = {
    offset: 0,
    limit: 151
  };

  pokemons: Pokemon[] = [];

  constructor(
    public router: Router,
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.getPokedex();
  }

  getPokedex(): void {
    this.pokedexService.getPokemons(this.pagination.offset, this.pagination.limit)
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      });
  }

  goToPokemonDetail(name: string): void {
    this.router.navigate(['pokemon', name]);
  }

}

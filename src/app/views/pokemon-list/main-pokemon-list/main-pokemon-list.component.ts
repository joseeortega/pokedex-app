import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-pokemon-list',
  templateUrl: './main-pokemon-list.component.html',
  styleUrls: ['./main-pokemon-list.component.scss']
})
export class MainPokemonListComponent implements OnInit {

  pagination = {
    offset: 0,
    limit: 20
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
        console.log("MainPokemonListComponent -> getPokedex -> pokemons", pokemons)
        this.pokemons = pokemons;
      });
  }

  goToPokemonDetail(name: string): void {
    this.router.navigate(['pokemon', name]);
  }

}

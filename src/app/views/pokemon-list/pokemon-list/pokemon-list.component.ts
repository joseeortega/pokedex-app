import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonFilter } from 'src/app/shared/models/pokemon.model';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {

  constructor(
    public router: Router,
    public pokemonListService: PokemonListService
  ) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.getInitialPokedex();
  }

  goToPokemonDetail(name: string): void {
    this.router.navigate(['pokemon', name]);
  }

  onScroll(): void {
    this.pokemonListService.getMorePokemons();
  }

  filter(pokemonFilter: PokemonFilter): void {
    this.pokemonListService.filterPokemons(pokemonFilter);
  }

  private getInitialPokedex(): void {
    this.pokemonListService.getPokemons();
  }

  private scrollToTop(): void {
    window.scroll(0, 0);
  }

}

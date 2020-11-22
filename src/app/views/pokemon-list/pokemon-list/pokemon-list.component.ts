import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from 'src/app/core/animations/animations';
import { PokemonListService } from './pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  animations: [animations],
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

  private getInitialPokedex(): void {
    this.pokemonListService.getInitialPokemons();
  }

  onScroll(): void {
    this.pokemonListService.getMorePokemons();
  }

  private scrollToTop(): void {
    window.scroll(0, 0);
  }

}

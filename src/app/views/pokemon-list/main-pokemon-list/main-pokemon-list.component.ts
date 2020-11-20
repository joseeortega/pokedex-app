import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from 'src/app/core/animations/animations';
import { MainPokemonListService } from './main-pokemon-list.service';

@Component({
  selector: 'app-main-pokemon-list',
  templateUrl: './main-pokemon-list.component.html',
  styleUrls: ['./main-pokemon-list.component.scss'],
  providers: [MainPokemonListService],
  animations: [animations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPokemonListComponent implements OnInit {

  constructor(
    public router: Router,
    public mainPokemonListService: MainPokemonListService
  ) { }

  ngOnInit(): void {
    this.scrollToTop();
    this.getInitialPokedex();
  }

  goToPokemonDetail(name: string): void {
    this.router.navigate(['pokemon', name]);
  }

  private getInitialPokedex(): void {
    this.mainPokemonListService.getInitialPokemons();
  }

  onScroll(): void {
    this.mainPokemonListService.getMorePokemons();
  }

  private scrollToTop(): void {
    window.scroll(0, 0);
  }

}

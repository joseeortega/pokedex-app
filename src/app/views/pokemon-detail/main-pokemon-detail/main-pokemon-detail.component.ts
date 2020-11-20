import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-main-pokemon-detail',
  templateUrl: './main-pokemon-detail.component.html',
  styleUrls: ['./main-pokemon-detail.component.scss']
})
export class MainPokemonDetailComponent implements OnInit {

  pokemonDetail: PokemonDetail;

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.pokemonDetail = this.route.snapshot.data.pokemon;
  }

  closeDetail(): void {
    this.router.navigate(['pokemon']);
  }

}

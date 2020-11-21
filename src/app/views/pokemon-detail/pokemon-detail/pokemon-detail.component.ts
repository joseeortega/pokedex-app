import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetail;

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.pokemon = this.route.snapshot.data.pokemon;
  }

  closeDetail(): void {
    this.router.navigate(['pokemon']);
  }

}

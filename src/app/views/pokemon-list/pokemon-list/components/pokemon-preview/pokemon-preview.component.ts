import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonPreviewComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}

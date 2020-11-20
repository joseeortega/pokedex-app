import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailComponent implements OnInit {

  @Output() closeDetailEvent = new EventEmitter();
  @Input() pokemon: PokemonDetail;

  constructor() { }

  ngOnInit(): void {
  }

  closeDetail(): void {
    this.closeDetailEvent.emit();
  }

}

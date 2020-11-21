import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    SharedModule
  ]
})
export class PokemonDetailModule { }

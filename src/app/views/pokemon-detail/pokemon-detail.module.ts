import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { MainPokemonDetailComponent } from './main-pokemon-detail/main-pokemon-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MainPokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    SharedModule
  ]
})
export class PokemonDetailModule { }

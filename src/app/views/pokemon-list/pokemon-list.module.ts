import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { MainPokemonListComponent } from './main-pokemon-list/main-pokemon-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MainPokemonListComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    SharedModule
  ]
})
export class PokemonListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonPreviewComponent } from './pokemon-list/components/pokemon-preview/pokemon-preview.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonPreviewComponent
  ],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class PokemonListModule { }

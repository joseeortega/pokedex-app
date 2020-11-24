import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonPreviewComponent } from './pokemon-list/components/pokemon-preview/pokemon-preview.component';
import { PokemonFilterComponent } from './pokemon-list/components/pokemon-filter/pokemon-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonPreviewComponent,
    PokemonFilterComponent
  ],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class PokemonListModule { }

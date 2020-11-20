import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPreviewComponent } from './components/pokemon-preview/pokemon-preview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonPreviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PokemonDetailComponent,
    PokemonPreviewComponent
  ]
})
export class SharedModule { }

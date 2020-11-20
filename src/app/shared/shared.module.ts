import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPreviewComponent } from './components/pokemon-preview/pokemon-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './services/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonPreviewComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  exports: [
    PokemonDetailComponent,
    PokemonPreviewComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

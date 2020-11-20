import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPreviewComponent } from './components/pokemon-preview/pokemon-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './services/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    PokemonPreviewComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  exports: [
    PokemonPreviewComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPokemonListComponent } from './main-pokemon-list/main-pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainPokemonListComponent,
    data: { type: 'Pokedex'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonListRoutingModule { }

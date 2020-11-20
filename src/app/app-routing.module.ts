import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./views/pokemon-list/pokemon-list.module').then(m => m.PokemonListModule),
    data: { title: 'Pokedex' }
  },
  {
    path: 'pokemon/:name',
    loadChildren: () => import('./views/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule),
    data: { title: 'Pokedex' }
  },
  {
    path: 'error',
    loadChildren: () => import('./views/error-page/error-page.module').then(m => m.ErrorPageModule),
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

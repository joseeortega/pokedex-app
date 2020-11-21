import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonDetailResolverService } from './resolvers/pokemon-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    resolve: {
      pokemon: PokemonDetailResolverService
    },
    component: PokemonDetailComponent,
    data: { title: 'Pokemon Detail', breadcrumb: 'Pokemon Detail' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetailRoutingModule { }

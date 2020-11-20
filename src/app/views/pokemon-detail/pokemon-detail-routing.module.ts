import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from 'src/app/shared/components/pokemon-detail/pokemon-detail.component';
import { PokemonDetailResolverService } from 'src/app/shared/services/resolvers/pokemon-detail-resolver.service';
import { MainPokemonDetailComponent } from './main-pokemon-detail/main-pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      pokemon: PokemonDetailResolverService
    },
    component: MainPokemonDetailComponent,
    data: { title: 'Pokemon Detail', breadcrumb: 'Pokemon Detail' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonDetailRoutingModule { }

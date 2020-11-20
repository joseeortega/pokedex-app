import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MainPokemonDetailService } from 'src/app/views/pokemon-detail/main-pokemon-detail/main-pokemon-detail.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolverService implements Resolve<Observable<string>> {
  constructor(private mainPokemonDetailService: MainPokemonDetailService) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): any {
    return this.mainPokemonDetailService.getPokemon(route.paramMap.get('name'));
  }

}

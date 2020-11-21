import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetailService } from '../pokemon-detail/pokemon-detail.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolverService implements Resolve<Observable<string>> {
  constructor(private pokemonDetailService: PokemonDetailService) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): any {
    return this.pokemonDetailService.getPokemon(route.paramMap.get('name'));
  }

}

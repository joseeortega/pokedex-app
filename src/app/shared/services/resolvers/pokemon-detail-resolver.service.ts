import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokedexService } from '../pokedex.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolverService implements Resolve<Observable<string>> {
  constructor(private pokedexService: PokedexService) { }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): any {
    return this.pokedexService.getPokemon(route.paramMap.get('name'));
  }

}

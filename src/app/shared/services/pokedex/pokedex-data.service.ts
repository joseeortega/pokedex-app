import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokedexDataService {
  constructor(private http: HttpClient) { }

  getPokemons(
    offset: number,
    limit: number,
    headers?: HttpHeaders
  ): Observable<any> {
    const endpoint = `${environment.pokemonApi}?offset=${offset}&limit=${limit}`;
    return this.http.get(endpoint, { headers });
  }

  /**
   * Get Pokemon by name
   * @param name name param
   */
  getPokemonByName(name: string): Observable<any> {
    const endpoint = `${environment.pokemonApi}${name}`;
    return this.http.get(endpoint);
  }
}

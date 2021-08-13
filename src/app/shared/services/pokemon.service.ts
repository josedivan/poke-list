import { Pokemon, PokemonResponse } from './../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public getPokemonList(page: number): Observable<PokemonResponse> {
    const offset = page === 1 ? 0 : (page - 1) * 20;
    console.log(offset);
    return this.http
      .get<PokemonResponse>(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
      )
      .pipe(
        map((response: PokemonResponse) => ({
          ...response,
          results: this.loadPoke(response.results),
        }))
      );
  }
  private loadPoke(listPokemon: Pokemon[]) {
    return listPokemon.map((item) => {
      const pokeId = parseInt(item.url.slice(34, -1));
      return {
        ...item,
        id: pokeId,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`,
      };
    });
  }
}

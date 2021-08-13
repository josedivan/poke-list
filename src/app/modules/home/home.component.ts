import { Pokemon, PokemonResponse } from './../../shared/models/pokemon.model';
import { PokemonService } from './../../shared/services/pokemon.service';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [],
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  page = 1;

  totalPokemons: number;

  pokeList$: Observable<any>;

  error: any;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService
      .getPokemonList(this.page)
      .subscribe((response: PokemonResponse) => {
        this.pokemons = [...this.pokemons, ...response.results];
        console.log(response);
      });

    (error: any) => {
      this.error = error;
      console.error('ERRO:', error);
    };
  }
  pageNext(): void {
    this.page = this.page + 1;
    this.getPokemonList();
  }
}

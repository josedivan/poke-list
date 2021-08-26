import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoContainerModule } from '@po-ui/ng-components';
import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonModalModule } from '../pokemon-modal/pokemon-modal.module';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, PoContainerModule, PokemonModalModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule { }

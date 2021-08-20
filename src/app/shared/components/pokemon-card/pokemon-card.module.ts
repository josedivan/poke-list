import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoContainerModule } from '@po-ui/ng-components';
import { PokemonCardComponent } from './pokemon-card.component';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, PoContainerModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}

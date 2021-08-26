import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModalComponent } from './pokemon-modal.component';
import { PoModalModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [PokemonModalComponent],
  imports: [
    CommonModule,
    PoModalModule
  ],
  exports: [PokemonModalComponent]
})
export class PokemonModalModule { }

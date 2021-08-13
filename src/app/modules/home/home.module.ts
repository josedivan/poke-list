import { PokemonCardComponent } from '../../shared/components/pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
@NgModule({
  declarations: [HomeComponent, PokemonCardComponent],
  imports: [CommonModule, HomeRoutingModule, PoContainerModule, PoButtonModule],
})
export class HomeModule {}

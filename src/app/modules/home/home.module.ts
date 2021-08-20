
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { PokemonCardModule } from 'src/app/shared/components/pokemon-card/pokemon-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PoContainerModule, PoButtonModule, PokemonCardModule],
})
export class HomeModule {}

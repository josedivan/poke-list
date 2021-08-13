import { HomeComponent } from 'src/app/modules/home/home.component';
import { PokemonService } from './shared/services/pokemon.service';
import { PokemonCardComponent } from 'src/app/shared/components/pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([]),
  ],
  providers: [PokemonService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss']
})
export class PokemonModalComponent implements OnInit {
  @ViewChild(PoModalComponent)
  modal: PoModalComponent;


  constructor() { }

  ngOnInit(): void {
  }

  abrir(id: number) {

    this.modal.open();
  }

}

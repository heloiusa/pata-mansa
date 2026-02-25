import { Component } from '@angular/core';

// ícones sendo importados
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { CriarBanho } from '../criar-banho/criar-banho';

@Component({
  selector: 'app-tipos-banho',
  imports: [FontAwesomeModule, CriarBanho],
  templateUrl: './tipos-banho.html',
  styleUrl: './tipos-banho.css',
})
export class TiposBanho {
  //Ícones
  iconSearch = faMagnifyingGlass;
  iconAdd = faPlus

  exibirModal: boolean = false

  abrirModal() {
    this.exibirModal = true;
  }
}

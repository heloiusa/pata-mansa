import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// ícones sendo importados
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

import { BanhoService } from '../../services/banho-service';
import { CriarBanho } from '../criar-banho/criar-banho';

@Component({
  selector: 'app-tipos-banho',
  imports: [FontAwesomeModule, CriarBanho, CommonModule], 
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

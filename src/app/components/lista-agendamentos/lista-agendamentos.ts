import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CriarAgendamento } from '../criar-agendamento/criar-agendamento';

@Component({
  selector: 'app-lista-agendamentos',
  imports: [FontAwesomeModule, CriarAgendamento],
  templateUrl: './lista-agendamentos.html',
  styleUrl: './lista-agendamentos.css',
})
export class ListaAgendamentos {
  // Ícones
  iconSearch = faMagnifyingGlass;
  iconAdd = faPlus;
  iconEdit = faEdit;
  iconTrash = faTrash;

  exibirModal: boolean = false;

  abrirModal() {
    this.exibirModal = true;
  }
}

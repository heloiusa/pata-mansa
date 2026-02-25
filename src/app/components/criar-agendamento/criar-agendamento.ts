import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-criar-agendamento',
  imports: [FontAwesomeModule],
  templateUrl: './criar-agendamento.html',
  styleUrl: './criar-agendamento.css',
})
export class CriarAgendamento {
  iconAdd = faPlus;
  iconClose = faTimes;
  @Output() aoFechar = new EventEmitter<void>();

  fechar() {
    this.aoFechar.emit();
  }
}

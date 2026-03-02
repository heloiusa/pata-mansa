import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-excluir-agenda-modal',
  imports: [FontAwesomeModule],
  templateUrl: './excluir-agenda-modal.html',
  styleUrl: './excluir-agenda-modal.css',
})
export class ExcluirAgendaModal {
  iconTrash = faTrash;

  @Input() nomeAgenda: string = '';
  @Input() banhoAgenda: string = ''
  @Output() aoConfirmar = new EventEmitter<void>();
  @Output() aoCancelar = new EventEmitter<void>();

  confirmar() {
    this.aoConfirmar.emit();
  }

  cancelar() {
    this.aoCancelar.emit();
  }
}

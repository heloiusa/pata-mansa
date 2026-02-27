import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-excluir-banho-modal',
  imports: [FontAwesomeModule],
  templateUrl: './excluir-banho-modal.html',
  styleUrl: './excluir-banho-modal.css',
})
export class ExcluirBanhoModal {
  @Input() nomeBanho: string = '';
  @Output() aoConfirmar = new EventEmitter<void>();
  @Output() aoCancelar = new EventEmitter<void>();

  iconTrash = faTrash;

  confirmar() {
    this.aoConfirmar.emit();
  }

  cancelar() {
    this.aoCancelar.emit();
  }
}

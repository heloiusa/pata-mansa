import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BanhoService } from '../../services/banho-service';

@Component({
  selector: 'app-criar-banho',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './criar-banho.html',
  styleUrl: './criar-banho.css',
})
export class CriarBanho {
  iconAdd = faPlus;
  iconClose = faTimes;

  /* @Output() aoFechar: Você está criando um "canal de saída" (porta de saída). O nome aoFechar é o evento que o componente Pai vai ficar "escutando".*/
  @Output() aoFechar = new EventEmitter<void>();

  /* new EventEmitter<void>(): Você está inicializando esse canal. O <void> significa que você só vai dar um "aviso", sem enviar nenhum dado junto (como se fosse apenas um sinal de "OK!").*/

  fechar() {
    this.aoFechar.emit();
    /*this.aoFechar.emit(): Aqui é o momento em que o Filho aperta o botão do walkie-talkie e fala: "Atenção Pai, eu fui fechado!".*/
  }

  //Objeto que reconhecerá os dados do formulário
  novoBanho: any = { nome: '', descricao: '', valor: 0 };

  constructor(private banhoService: BanhoService) {}

  salvar() {
    this.banhoService.criar(this.novoBanho).subscribe({
      next: (res) => {
        console.log('Tipo de Banho salvo:', res);
        this.fechar();
      },
      error: (err) => console.error('Erro ao salvar', err),
    });
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BanhoService, TipoBanho } from '../../services/banho-service';

@Component({
  selector: 'app-criar-banho',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './criar-banho.html',
  styleUrl: './criar-banho.css',
})
export class CriarBanho {
  iconAdd = faPlus;
  iconClose = faTimes;
  
  //Objeto que reconhecerá os dados do formulário
  novoBanho: any = { nome: '', descricao: '', valor: 0 };

  // Se receber um banho, entra em modo de edição
  @Input() banhoParaEditar: TipoBanho | null = null;

  /* @Output() aoFechar: Você está criando um "canal de saída" (porta de saída). O nome aoFechar é o evento que o componente Pai vai ficar "escutando".*/
  @Output() aoFechar = new EventEmitter<void>();

  /* new EventEmitter<void>(): Você está inicializando esse canal. O <void> significa que você só vai dar um "aviso", sem enviar nenhum dado junto (como se fosse apenas um sinal de "OK!").*/

  ngOnInit() {
    // Se existir um banho para editar, preenche o formulário
    if (this.banhoParaEditar) {
      this.novoBanho = { ...this.banhoParaEditar };
    }
  }

  fechar() {
    this.aoFechar.emit();
    /*this.aoFechar.emit(): Aqui é o momento em que o Filho aperta o botão do walkie-talkie e fala: "Atenção Pai, eu fui fechado!".*/
  }

  constructor(private banhoService: BanhoService) {}

  salvar() {
    // se existir um id de banho ele será editado
    if (this.novoBanho.id) {
      this.banhoService.editar(this.novoBanho).subscribe(() => this.fechar());
    } else {
      this.banhoService.criar(this.novoBanho).subscribe({
        next: (res) => {
          console.log('Tipo de Banho salvo:', res);
          this.fechar();
        },
        error: (err) => console.error('Erro ao salvar', err),
      });
    }
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// ícones sendo importados
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BanhoService, TipoBanho } from '../../services/banho-service';
import { ExcluirBanhoModal } from '../excluir-banho-modal/excluir-banho-modal';
import { CriarBanho } from '../criar-banho/criar-banho';

@Component({
  selector: 'app-tipos-banho',
  imports: [FontAwesomeModule, CriarBanho, CommonModule, ExcluirBanhoModal],
  templateUrl: './tipos-banho.html',
  styleUrl: './tipos-banho.css',
})
export class TiposBanho implements OnInit {
  // Ícones
  iconSearch = faMagnifyingGlass;
  iconAdd = faPlus;
  iconEdit = faEdit;
  iconTrash = faTrash;

  // Lista que guardará os banhos vindos da API
  listaBanhos: TipoBanho[] = [];
  banhoSelecionado: TipoBanho | null = null;
  
  // Lógica para abrir o modal de criar-banho
  exibirModal: boolean = false;

  constructor(
    private banhoService: BanhoService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.carregarBanhos();
  }

  // Listando os banhos
  carregarBanhos() {
    this.banhoService.listar().subscribe({
      next: (dados) => {
        this.listaBanhos = dados;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar lista:', err),
    });
  }
  // Abrindo o modal
  abrirModal() {
    this.exibirModal = true;
  }

  // Lógica de edição
  prepararEdicao(banho: TipoBanho) {
    this.banhoSelecionado = banho;
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
    this.banhoSelecionado = null;
    this.carregarBanhos();
  }

  // Exclusão do Banho
  banhoParaExcluir: TipoBanho | null = null;
  exibirModalExcluir: boolean = false;

  // 1. Chamado pelo botão da lixeira na tabela
  prepararExclusao(banho: TipoBanho) {
    this.banhoParaExcluir = banho;
    this.exibirModalExcluir = true;
  }

  // 2. Chamado quando o usuário clica em "Sim, Excluir" no Modal
  confirmarExclusao() {
    if (this.banhoParaExcluir?.id) {
      this.banhoService.deletar(this.banhoParaExcluir.id).subscribe({
        next: () => {
          this.carregarBanhos();
          this.fecharModalExcluir();
        },
        error: (err) => {
          console.error('Erro ao excluir: ', err);
        },
      });
    }
  }

  fecharModalExcluir() {
    this.exibirModalExcluir = false;
    this.banhoParaExcluir = null;
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
// ícones sendo importados
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { BanhoService, TipoBanho } from '../../services/banho-service';
import { CriarBanho } from '../criar-banho/criar-banho';

@Component({
  selector: 'app-tipos-banho',
  imports: [FontAwesomeModule, CriarBanho, CommonModule],
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

  carregarBanhos() {
    this.banhoService.listar().subscribe({
      next: (dados) => {
        this.listaBanhos = dados;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar lista:', err),
    });
  }

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
}

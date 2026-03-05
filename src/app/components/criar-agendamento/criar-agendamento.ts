import { Component, EventEmitter, Output, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AgendamentoService, Agendamento } from '../../services/agendamento-service';
import { BanhoService, TipoBanho } from '../../services/banho-service';

@Component({
  selector: 'app-criar-agendamento',
  imports: [FontAwesomeModule, FormsModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './criar-agendamento.html',
  styleUrl: './criar-agendamento.css',
})
export class CriarAgendamento implements OnInit {
  // Ícones
  iconAdd = faPlus;
  iconClose = faTimes;

  novoAgendamento: any = {
    nomeTutor: '',
    telefone: '',
    nomeAnimal: '',
    observacao: '',
    servicos: [],
    data: '',
    hora: '',
    valorTotal: '',
  };
  listaBanho: TipoBanho[] = [];

  @Input() agendaParaEditar: Agendamento | null = null;

  @Output() aoFechar = new EventEmitter<void>();

  constructor(
    private agendamentoService: AgendamentoService,
    private banhoService: BanhoService, // injeto o serviço de banho
    private cdr: ChangeDetectorRef,
  ) {}

  // carregando tipos de banho
  ngOnInit(): void {
    this.carregarBanhos();
    if (this.agendaParaEditar) {
      this.novoAgendamento = {
        ...this.agendaParaEditar,
        servicos: this.agendaParaEditar.servicos || [], // Se não existir no banco, cria vazio
      };
    }
  }

  fechar() {
    this.aoFechar.emit();
  }

  carregarBanhos() {
    this.banhoService.listar().subscribe({
      next: (banhos) => {
        this.listaBanho = banhos;
        console.log('Banhos carregados: ', banhos);
      },
      error: (err) => console.error('Erro ao carregar tipos de banho', err),
    });
  }

  aoSelecionarBanho(event: any) {
    const banhoNome = event.target.value;
    const banhoSelecionado = this.listaBanho.find((b) => b.nome === banhoNome);
    if (banhoSelecionado) {
      this.novoAgendamento.valor = banhoSelecionado.valor;
    }
  }

  salvar() {
    if (this.novoAgendamento.id) {
      this.agendamentoService.editar(this.novoAgendamento).subscribe(() => this.fechar());
    } else {
      this.agendamentoService.criar(this.novoAgendamento).subscribe({
        next: (res) => {
          console.log('Agendamento salvo: ', res);
          this.fechar();
        },
        error: (err) => console.error('Erro ao salvar agendamento: ', err),
      });
    }
  }
  // função para adicionar o serviço a lista
  adicionarServico(banhoNome: string) {
    const banho = this.listaBanho.find((b) => b.nome === banhoNome);
    if (banho) {
      this.novoAgendamento.servicos.push({ nome: banho.nome, valor: banho.valor });
      this.cdr.detectChanges();
      this.atualizarTotal();
    }
  }

  removerServico(index: number) {
    this.novoAgendamento.servicos.splice(index, 1);
    this.atualizarTotal();
  }

  atualizarTotal() {
    this.novoAgendamento.valorTotal = this.novoAgendamento.servicos.reduce(
      (acc: number, atual: any) => acc + Number(atual.valor),
      0,
    );
  }
}

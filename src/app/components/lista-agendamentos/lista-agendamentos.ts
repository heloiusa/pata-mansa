import { ChangeDetectorRef, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CriarAgendamento } from '../criar-agendamento/criar-agendamento';
import { Agendamento, AgendamentoService } from '../../services/agendamento-service';
import { ExcluirAgendaModal } from '../excluir-agenda-modal/excluir-agenda-modal';

@Component({
  selector: 'app-lista-agendamentos',
  imports: [FontAwesomeModule, CriarAgendamento, CriarAgendamento, ExcluirAgendaModal],
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

  // Lista que guardará os agendamentos vindo da API
  listaAgendamentos: Agendamento[] = [];
  agendamentoSelecionado: Agendamento | null = null;

  constructor(
    private agendamentoService: AgendamentoService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  //Listando agendamentos
  carregarAgendamentos() {
    this.agendamentoService.listar().subscribe({
      next: (dados) => {
        this.listaAgendamentos = dados;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar lista de agendamentos:', err),
    });
  }

  // Abertura do modal para criar agendamento
  abrirModal() {
    this.exibirModal = true;
  }

  // Edição de agendamento
  prepararEdicao(agenda: Agendamento) {
    this.agendamentoSelecionado = agenda;
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
    this.agendamentoSelecionado = null;
    this.carregarAgendamentos();
  }

  // exclusão do agendamento
  agendaParaExcluir: Agendamento | null = null;
  exibirModalExcluir: boolean = false;

  // Exclusão do Agendamento
  prepararExclusao(agenda: Agendamento) {
    this.agendaParaExcluir = agenda;
    this.exibirModalExcluir = true;
  }

  // Confirmação da exclusão
  confirmarExclusao() {
    if (this.agendaParaExcluir?.id) {
      this.agendamentoService.deletar(this.agendaParaExcluir.id).subscribe({
        next: () => {
          this.carregarAgendamentos();
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
    this.agendaParaExcluir = null;
  }
}

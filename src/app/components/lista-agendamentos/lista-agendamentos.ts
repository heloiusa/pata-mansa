import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CriarAgendamento } from '../criar-agendamento/criar-agendamento';
import { Agendamento, AgendamentoService } from '../../services/agendamento-service';
import { ExcluirAgendaModal } from '../excluir-agenda-modal/excluir-agenda-modal';

@Component({
  selector: 'app-lista-agendamentos',
  imports: [
    FormsModule,
    FontAwesomeModule,
    CriarAgendamento,
    CriarAgendamento,
    ExcluirAgendaModal,
    NgxMaskPipe,
    NgxMaskDirective,
  ],
  templateUrl: './lista-agendamentos.html',
  styleUrl: './lista-agendamentos.css',
})
export class ListaAgendamentos {
  // Ícones
  iconSearch = faMagnifyingGlass;
  iconAdd = faPlus;
  iconEdit = faEdit;
  iconTrash = faTrash;

  termoBusca: string = '';
  exibirModal: boolean = false;

  // Lista que guardará os agendamentos vindo da API
  listaAgendamentos: Agendamento[] = [];
  agendamentoFiltrados: Agendamento[] = [];
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
        this.agendamentoFiltrados = dados;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erro ao carregar lista de agendamentos:', err),
    });
  }

  // buscar pelo nome do agendamento
  // filtrar agendamentos
  filtrarAgendamentos() {
    if (!this.termoBusca) {
      this.agendamentoFiltrados = this.listaAgendamentos;
      this.cdr.detectChanges();
      return;
    }

    const termo = this.termoBusca.toLowerCase();
    this.agendamentoFiltrados = this.listaAgendamentos.filter(
      (agenda) =>
        agenda.nomeAnimal?.toLowerCase().includes(termo) ||
        agenda.nomeTutor?.toLowerCase().includes(termo),
    );
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
    this.cdr.detectChanges();
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
    this.cdr.detectChanges();
  }

  extrairNomesServicos(servicos: any[] | undefined): string {
    if (!servicos || !Array.isArray(servicos)) return 'Nenhum';
    return servicos.map((s) => s.nome).join(', ');
  }
}

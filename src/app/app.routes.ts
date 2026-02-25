import { Routes } from '@angular/router';
import { ListaAgendamentos } from './components/lista-agendamentos/lista-agendamentos';
import { TiposBanho } from './components/tipos-banho/tipos-banho';

export const routes: Routes = [
  { path: 'agendamentos', component: ListaAgendamentos },
  { path: 'tipos-banho', component: TiposBanho },
  { path: '', redirectTo: '/agendamentos', pathMatch: 'full' },
];

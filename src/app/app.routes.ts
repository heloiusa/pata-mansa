import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { ListaAgendamentos } from './components/lista-agendamentos/lista-agendamentos';
import { TiposBanho } from './components/tipos-banho/tipos-banho';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'agendamentos', 
    component: ListaAgendamentos, 
    canActivate: [authGuard] },
  { path: 'tipos-banho', 
    component: TiposBanho, 
    canActivate: [authGuard] },
  { path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' },
];

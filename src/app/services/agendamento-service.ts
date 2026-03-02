import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Agendamento {
  id?: string;
  nomeTutor?: string;
  telefone?: string;
  nomeAnimal?: string;
  observacao?: string;
  tipoBanho: string;
  data?: string;
  hora?: string;
  valor?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private readonly API = 'http://localhost:3000/agendamentos';

  constructor(private http: HttpClient) {}

  // Método para Listar Todos
  listar(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.API);
  }

  // Método para Criar um novo (POST)
  criar(agenda: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.API, agenda);
  }

  // Método para Editar (PUT)
  editar(agenda: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.API}/${agenda.id}`, agenda);
  }

  // Método para Deletar (DELETE)
  deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}

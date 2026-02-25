import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TipoBanho {
  id?: string;
  nome?: string;
  descricao?: string;
  valor?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BanhoService {
  private readonly API = 'http://localhost:3000/tipos-banho';

  constructor(private http: HttpClient) {

  }

  //Método para Listar Todos
  listar(): Observable<TipoBanho[]> {
    return this.http.get<TipoBanho[]>(this.API)
  }

  //Método para Criar um novo (POST)
  criar(banho: TipoBanho): Observable<TipoBanho> {
    return this.http.post<TipoBanho>(this.API, banho)
  }
}

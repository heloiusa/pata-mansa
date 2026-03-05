import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly API = 'http://localhost:3000/usuarios';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(email: string, senha: string) {
    return this.http
      .get<any[]>(this.API, {
        params: {
          email: email,
          senha: senha,
        },
      })
      .pipe(
        tap((usuarios) => {
          console.log('Resposta do servidor:', usuarios); // ISSO VAI APARECER NO F12
          if (usuarios && usuarios.length > 0) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarios[0]));
            this.router.navigate(['/agendamentos']); // Adicionei a barra inicial
          } else {
            alert('Email ou senha incorretos! Verifique o console.');
          }
        }),
      );
  }

  estaLogado(): boolean {
    return localStorage.getItem('usuarioLogado') !== null;
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.router.navigate(['./login']);
  }
}

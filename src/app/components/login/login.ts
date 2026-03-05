import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  senha = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  fazerLogin() {
    if (this.email && this.senha) {
      this.authService.login(this.email, this.senha).subscribe({
        next: () => {
          console.log('Login processado!');
        },
        error: (err) => {
          console.error('Erro na requisição de login', err);
          alert('Erro ao conectar com o servidor.');
        }
      });
    } else {
      alert('Preencha todos os campos!');
    }
  }
}


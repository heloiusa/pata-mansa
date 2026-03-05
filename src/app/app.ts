import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Pata Mansa');

  constructor(private router: Router) {}

  // Criamos uma função para verificar se NÃO estamos no login
  exibirNavbar() {
    return this.router.url !== '/login';
  }
}

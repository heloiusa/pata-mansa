import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPaw, faCalendar, faBath, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  //ícones
  iconPaw = faPaw;
  iconCalendar = faCalendar;
  iconBath = faBath;
  iconMenu = faBars;

  menuAberto: boolean = false;

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }
}

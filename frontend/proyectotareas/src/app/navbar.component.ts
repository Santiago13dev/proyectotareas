import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav>
      <span class="logo">Tareas</span>
      <ul class="links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Mis tareas</a></li>
        <li><a href="#">Perfil</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
      nav { display: flex; align-items: center; }
      .logo { font-weight: bold; margin-right: 2rem; }
      ul { list-style: none; display: flex; gap: 1rem; padding: 0; margin: 0; }
      a { color: white; text-decoration: none; }
    `
  ]
})
export class NavbarComponent {}

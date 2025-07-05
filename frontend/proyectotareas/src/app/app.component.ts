import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <main class="container">
      <h1>Bienvenido a la aplicación de tareas</h1>
    </main>
  `,
  styles: [
    `
      .container { padding: 1rem; }
    `
  ]
})
export class AppComponent {}

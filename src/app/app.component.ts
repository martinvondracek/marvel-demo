/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

// providers
import {HttpService} from './shared/services/http';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./comics'] ">
          Comics books
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
    </footer>
  `,
  providers: [
    HttpService
  ]
})
export class App {
}

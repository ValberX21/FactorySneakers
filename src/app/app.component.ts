import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header *ngIf="isLoginPage()"></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(public router: Router) {}

  isLoginPage(): boolean {
    return this.router.url === '/users' ||
           this.router.url === '/sneakers' ||
           this.router.url === '/order';
  }
}

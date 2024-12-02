import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/']); // Redirige al home
  }
  navigateToPage(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  navigateToOtherPage() {
    this.router.navigate(['/otra-pagina']); // Redirige a otra página
  }
}


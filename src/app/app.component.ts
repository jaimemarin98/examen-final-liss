import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'evaluacion-final-guitarra';
  constructor(private router: Router) {}

  ngOnInit() {
    // Redirige a la página de inicio cuando se inicie la aplicación
    this.router.navigate(['']);
     // Cada vez que se termine una navegación, mover el scroll a la parte superior de la página
     this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}

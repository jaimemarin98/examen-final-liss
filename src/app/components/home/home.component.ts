import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule], // Agrega CommonModule aquí
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

   // Datos de las imágenes
   images = [
    { src: 'assets/img/guitar1.jpg', alt: 'Orígenes Antiguos de la guitarra', description: 'La guitarra, en sus formas más primitivas, tiene raíces en instrumentos de cuerda de la antigüedad. Las primeras versiones de la guitarra se remontan a la antigua Grecia, con el "kithara" (un tipo de lira) y el "phorminx" (similar a la lira), que tenían cuerdas afinadas y se tocaban con una pua. Estos instrumentos de cuerda con caja resonante influirían en la posterior evolución de la guitarra.' },
    { src: 'assets/img/guitar2.jpg', alt: 'El Cuello de la Guitarra', description: 'El mástil de la guitarra (el cuello) tiene normalmente 22 trastes, aunque algunas guitarras pueden tener hasta 24 o más. Los trastes son las divisiones del mástil, que permiten cambiar la afinación de las cuerdas al presionarlas.' },
    { src: 'assets/img/guitar3.jpg', alt: '¿Sabías que las guitarras pueden ser "celosas"?', description: 'A veces, los guitarristas dicen que sus guitarras "se ponen celosas" cuando pasan mucho tiempo tocando otros instrumentos o cuando tocan en exceso con un exceso de distorsión. Se dice que la guitarra "llora" cuando no la cuidan lo suficiente, o incluso que "se descontrola" si no se afina con cariño. 😜 Es una broma que los músicos suelen decir para referirse al hecho de que las guitarras a menudo se desafinan o requieren ajustes después de una larga sesión de ensayo o conciertos, ¡pero suena divertido imaginar que la guitarra tiene sentimientos! 🎸😆' }
  ];

  // Estado del modal
  isModalOpen = false;
  modalImage: { src: string, alt: string, description: string } = { src: '', alt: '', description: '' };

  openModal(image: { src: string, alt: string, description: string }) {
    this.modalImage = image;
    this.isModalOpen = true;
  }
  
  closeModal(): void {
    this.isModalOpen = false;
  }
  

  navigateToPage(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}

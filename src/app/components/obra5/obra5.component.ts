import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obra5',
  imports: [CommonModule],
  templateUrl: './obra5.component.html',
  styleUrl: './obra5.component.scss'
})
export class Obra5Component {
  constructor(private router: Router) {}

  videos = [
    {
      title: 'Video Libra Sonatine',
      alt: 'El título Libra Sonatine hace referencia al signo zodiacal Libra, el signo del equilibrio y la armonía. Dyens, siendo Libra, parece haber plasmado su personalidad en la pieza, equilibrando emociones intensas con momentos de calma.',
      text:     'Dyens era conocido por su sentido del humor y creatividad. En Libra Sonatine, estos aspectos se reflejan en las sorpresas rítmicas y melódicas que mantiene a los oyentes cautivados.',
      text2: 'La pieza ha sido interpretada por guitarristas de todo el mundo, convirtiéndose en un estándar del repertorio contemporáneo para guitarra clásica.',
      thumbnail: 'assets/img/librasonatine.jpg', // Ruta a la miniatura
      src: 'assets/vids/librasonatine.mp4', // Ruta al video
    }
    // Agrega más videos según sea necesario
  ];

  isVideoModalOpen = false; // Controla la visibilidad del modal de video
  selectedVideo: any = null; // Almacena el video seleccionado

  // Estado del modal
  isModalOpen = false;
  modalImage: { src: string; alt: string; description: string } = {
    src: '',
    alt: '',
    description: '',
  };

  openModal(image: { src: string; alt: string; description: string }) {
    this.modalImage = image;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  navigateToPage(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  openVideoModal(video: any) {
    this.selectedVideo = video;
    this.isVideoModalOpen = true;
  }

  closeVideoModal() {
    this.selectedVideo = null;
    this.isVideoModalOpen = false;
  }
}

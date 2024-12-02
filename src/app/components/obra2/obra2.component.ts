import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obra2',
  imports: [CommonModule],
  templateUrl: './obra2.component.html',
  styleUrl: './obra2.component.scss'
})
export class Obra2Component {
  constructor(private router: Router) {}

  videos = [
    {
      title: 'Video Porro',
      alt: 'Tradicionalmente interpretado por bandas de viento en las fiestas del Caribe colombiano, el Porro en la Suite Colombiana logra trasladar esa riqueza sonora a la guitarra, recreando los acordes vibrantes y las melodías alegres.',
      thumbnail: 'assets/img/porro.jpg', // Ruta a la miniatura
      src: 'assets/vids/porro.mp4', // Ruta al video
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

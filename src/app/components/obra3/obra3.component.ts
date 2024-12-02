import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obra3',
  imports: [CommonModule],
  templateUrl: './obra3.component.html',
  styleUrl: './obra3.component.scss'
})
export class Obra3Component {
  constructor(private router: Router) {}

  videos = [
    {
      title: 'Video Bambuco en Mi Menor',
      alt: 'La elección de Mi menor no es casual; esta tonalidad es conocida por su capacidad de transmitir emociones profundas, melancólicas y nostálgicas, elementos presentes en la música andina.',
      thumbnail: 'assets/img/bambuco.jpg', // Ruta a la miniatura
      src: 'assets/vids/bambuco.mp4', // Ruta al video
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

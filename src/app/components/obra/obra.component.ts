import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.component.html',
  imports: [CommonModule], // Agrega CommonModule aquí
  styleUrl: './obra.component.scss',
})
export class ObraComponent {
  constructor(private router: Router) {}

  videos = [
    {
      title: 'Video Gran Jota',
      alt: 'Gran Jota no solo era una pieza de concierto, sino también una obra que Tárrega utilizaba para impresionar a su audiencia y mostrar el potencial expresivo de la guitarra clásica.',
      thumbnail: 'assets/img/granjota.jpg', // Ruta a la miniatura
      src: 'assets/vids/granjota.mp4', // Ruta al video
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

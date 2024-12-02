import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obra4',
  imports: [CommonModule],
  templateUrl: './obra4.component.html',
  styleUrl: './obra4.component.scss'
})
export class Obra4Component {
  constructor(private router: Router) {}

  videos = [
    {
      title: 'Video Koyunbaba',
      alt: 'Koyunbaba significa "pastor de ovejas" en turco y es también el nombre de un santo sufí del siglo XIII, venerado en Turquía. La obra está inspirada en los paisajes y tradiciones de la región turca donde se cree que Koyunbaba vivió.',
      text:     'La pieza utiliza una afinación especial (C# minor): C#-G#-C#-G#-C#-E, conocida como scordatura. Esto cambia la sonoridad habitual de la guitarra, evocando un ambiente misterioso y exótico.',
      thumbnail: 'assets/img/Koyunbaba.jpg', // Ruta a la miniatura
      src: 'assets/vids/Koyunbaba.mp4', // Ruta al video
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

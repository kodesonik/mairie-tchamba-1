import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tourisme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tourisme.html',
  styleUrl: './tourisme.css'
})
export class TourismeComponent {
  sites = [
    {
      title: 'Le Marché de Tchamba',
      description: 'Un lieu vibrant d\'échanges et de culture, où l\'on trouve produits locaux et artisanat.',
      image: 'assets/images.jpg'
    },
    {
      title: 'Forêt d\'Abdoulaye',
      description: 'Réserve forestière offrant une biodiversité riche et des paysages apaisants pour les amoureux de la nature.',
      image: 'assets/images.jpg'
    },
    {
      title: 'Culture Vodun Tchamba',
      description: 'Découvrez le riche héritage spirituel et historique lié au culte Tchamba et ses traditions.',
      image: 'assets/images.jpg'
    }
  ];
}

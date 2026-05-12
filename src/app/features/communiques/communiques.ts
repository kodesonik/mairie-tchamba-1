import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-communiques',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './communiques.html',
  styleUrl: './communiques.css'
})
export class CommuniquesComponent {
  communiques = [
    {
      id: 1,
      title: 'Avis de convocation - Session ordinaire du Conseil Municipal',
      date: '10 Janvier 2026',
      category: 'Conseil Municipal',
      excerpt: 'Les membres du conseil municipal sont convoqués pour la session ordinaire du premier trimestre 2026.',
      important: true
    },
    {
      id: 2,
      title: 'Campagne de vaccination contre la méningite',
      date: '08 Janvier 2026',
      category: 'Santé',
      excerpt: 'La mairie informe la population du lancement de la campagne de vaccination gratuite dans tous les centres de santé de la commune.',
      important: true
    },
    {
      id: 3,
      title: 'Horaires d\'ouverture pendant les fêtes',
      date: '20 Décembre 2025',
      category: 'Administration',
      excerpt: 'Modification des horaires d\'ouverture des services municipaux pendant la période des fêtes de fin d\'année.',
      important: false
    },
    {
      id: 4,
      title: 'Travaux de réfection de la voirie',
      date: '15 Décembre 2025',
      category: 'Travaux',
      excerpt: 'Information sur les travaux de réfection des routes principales du centre-ville. Déviation mise en place.',
      important: false
    },
    {
      id: 5,
      title: 'Distribution d\'eau potable - Nouveau forage',
      date: '10 Décembre 2025',
      category: 'Eau & Assainissement',
      excerpt: 'Mise en service d\'un nouveau forage dans le quartier Nord pour améliorer l\'accès à l\'eau potable.',
      important: false
    }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projets.html',
  styleUrl: './projets.css'
})
export class ProjetsComponent {
  projets = [
    {
      id: 1,
      titre: 'Réhabilitation des écoles primaires',
      description: 'Rénovation et équipement de 5 écoles primaires de la commune pour améliorer les conditions d\'apprentissage.',
      statut: 'En cours',
      categorie: 'Éducation',
      progression: 65
    },
    {
      id: 2,
      titre: 'Adduction d\'eau potable',
      description: 'Extension du réseau d\'eau potable pour desservir les quartiers périphériques de la commune.',
      statut: 'En cours',
      categorie: 'Infrastructure',
      progression: 40
    },
    {
      id: 3,
      titre: 'Construction du centre de santé',
      description: 'Création d\'un nouveau centre de santé communautaire avec équipements modernes.',
      statut: 'Planifié',
      categorie: 'Santé',
      progression: 10
    },
    {
      id: 4,
      titre: 'Éclairage public solaire',
      description: 'Installation de lampadaires solaires dans les principales artères de la ville.',
      statut: 'En cours',
      categorie: 'Énergie',
      progression: 20
    },
    {
      id: 5,
      titre: 'Aménagement du marché central',
      description: 'Modernisation des infrastructures du grand marché dominical de Tchamba.',
      statut: 'En cours',
      categorie: 'Commerce',
      progression: 55
    },
    {
      id: 6,
      titre: 'Programme de reboisement',
      description: 'Plantation de 10 000 arbres dans la commune pour lutter contre la déforestation.',
      statut: 'En cours',
      categorie: 'Environnement',
      progression: 30
    }
  ];
}

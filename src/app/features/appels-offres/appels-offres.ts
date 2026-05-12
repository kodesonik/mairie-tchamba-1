import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appels-offres',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './appels-offres.html',
  styleUrl: './appels-offres.css'
})
export class AppelsOffresComponent {
  appels = [
    {
      id: 1,
      reference: 'AMI-2026-001',
      titre: 'Construction d\'un centre de santé communautaire',
      datePublication: '05 Janvier 2026',
      dateLimite: '05 Février 2026',
      type: 'Travaux',
      statut: 'Ouvert',
      budget: '150 000 000 FCFA'
    },
    {
      id: 2,
      reference: 'AMI-2026-002',
      titre: 'Fourniture de matériel informatique pour la mairie',
      datePublication: '02 Janvier 2026',
      dateLimite: '25 Janvier 2026',
      type: 'Fournitures',
      statut: 'Ouvert',
      budget: '25 000 000 FCFA'
    },
    {
      id: 3,
      reference: 'AMI-2025-015',
      titre: 'Réhabilitation des pistes rurales - Lot 3',
      datePublication: '15 Décembre 2025',
      dateLimite: '15 Janvier 2026',
      type: 'Travaux',
      statut: 'Ouvert',
      budget: '80 000 000 FCFA'
    },
    {
      id: 4,
      reference: 'AMI-2025-014',
      titre: 'Recrutement d\'un cabinet d\'audit',
      datePublication: '01 Décembre 2025',
      dateLimite: '31 Décembre 2025',
      type: 'Services',
      statut: 'Clôturé',
      budget: '15 000 000 FCFA'
    },
    {
      id: 5,
      reference: 'AMI-2025-013',
      titre: 'Construction de forages dans les villages',
      datePublication: '15 Novembre 2025',
      dateLimite: '15 Décembre 2025',
      type: 'Travaux',
      statut: 'Attribué',
      budget: '200 000 000 FCFA'
    }
  ];
}

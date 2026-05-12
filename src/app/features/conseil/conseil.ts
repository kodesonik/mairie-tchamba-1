import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conseil',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './conseil.html',
  styleUrl: './conseil.css'
})
export class ConseilComponent {
  sessions = [
    {
      id: 1,
      title: 'Session ordinaire - 1er trimestre 2026',
      date: '15 Janvier 2026',
      status: 'À venir',
      description: 'Ordre du jour : Budget prévisionnel 2026, projets d\'infrastructures, bilan des activités 2025.',
      documents: ['Convocation', 'Ordre du jour']
    },
    {
      id: 2,
      title: 'Session extraordinaire - Adoption du budget 2026',
      date: '20 Décembre 2025',
      status: 'Terminée',
      description: 'Examen et adoption du budget communal pour l\'exercice 2026. Vote des différentes lignes budgétaires.',
      documents: ['Procès-verbal', 'Délibérations', 'Budget adopté']
    },
    {
      id: 3,
      title: 'Session ordinaire - 4ème trimestre 2025',
      date: '15 Octobre 2025',
      status: 'Terminée',
      description: 'Bilan des réalisations du 3ème trimestre, préparation du budget 2026, questions diverses.',
      documents: ['Procès-verbal', 'Délibérations']
    },
    {
      id: 4,
      title: 'Session ordinaire - 3ème trimestre 2025',
      date: '15 Juillet 2025',
      status: 'Terminée',
      description: 'Suivi des projets en cours, partenariats avec les ONG, gestion des marchés publics.',
      documents: ['Procès-verbal', 'Délibérations']
    }
  ];

  membres = [
    { nom: 'M. TITIKPINA Hamza', fonction: 'Maire', photo: 'assets/mayor.jpg' },
    { nom: 'M. KATAFARA Ousmanou', fonction: '1er Adjoint au Maire', photo: null },
    { nom: 'Mme ABDOU Fatima', fonction: '2ème Adjointe au Maire', photo: null },
    { nom: 'M. KOKOU Mensah', fonction: 'Conseiller', photo: null },
    { nom: 'Mme AMAVI Essi', fonction: 'Conseillère', photo: null },
    { nom: 'M. TOURE Ibrahim', fonction: 'Conseiller', photo: null }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recettes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recettes.html',
  styleUrl: './recettes.css'
})
export class RecettesComponent {
  recettes = [
    {
      titre: 'Taxes sur les marchés',
      description: 'Droits de place et taxes perçues sur les marchés communaux.',
      montant: '15 000 000 FCFA',
      pourcentage: 35
    },
    {
      titre: 'Patentes et licences',
      description: 'Contributions des entreprises et commerces locaux.',
      montant: '12 000 000 FCFA',
      pourcentage: 28
    },
    {
      titre: 'Taxes foncières',
      description: 'Impôts sur les propriétés bâties et non bâties.',
      montant: '8 000 000 FCFA',
      pourcentage: 19
    },
    {
      titre: 'État civil et légalisations',
      description: 'Frais des actes administratifs et légalisations.',
      montant: '5 000 000 FCFA',
      pourcentage: 12
    },
    {
      titre: 'Autres recettes',
      description: 'Amendes, locations et autres revenus divers.',
      montant: '3 000 000 FCFA',
      pourcentage: 6
    }
  ];

  stats = [
    { label: 'Budget 2025', value: '450 M FCFA' },
    { label: 'Taux de recouvrement', value: '78%' },
    { label: 'Recettes propres', value: '43 M FCFA' },
    { label: 'Transferts État', value: '280 M FCFA' }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-organigramme',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './organigramme.html',
  styleUrl: './organigramme.css'
})
export class OrganigrammeComponent {
  // Exécutif
  executif = {
    maire: { nom: 'M. TITIKPINA Hamza', poste: 'Maire', photo: 'assets/mayor.jpg' },
    adjoints: [
      { nom: 'M. KATAFARA', poste: '1er Adjoint au Maire', photo: '' },
      { nom: 'M. OUMOROU Latifou', poste: '2ème Adjoint au Maire', photo: 'assets/OUMOROU_Latifou.jpg' }
    ]
  };

  // Secrétariat Général
  secretariat = { nom: 'M. KPOWOU', poste: 'Secrétaire Général' };

  // Commissions
  commissions = [
    {
      nom: 'Commission Économique, Financière, Juridique & Planification',
      president: 'M. AFFO BALE',
      couleur: 'blue',
      rapporteurs: [
        { nom: 'M. ANOUNKOU', poste: 'Rapporteur' }
      ],
      responsables: [
        { nom: 'M. OURO-TAGBA', poste: 'Responsable Affaires Économiques et Juridiques', photo: '' },
        { nom: 'M. TCHAKONDO Schamsoudine', poste: 'Responsable Finances et Planification', photo: 'assets/TCHAKONDO_Schamsoudine.jpg' }
      ]
    },
    {
      nom: 'Commission Domaniales, Environnement, Travaux Techniques & Patrimoine',
      president: 'M. MAWOULIGNA',
      couleur: 'green',
      rapporteurs: [
        { nom: 'M. TAKPA', poste: 'Rapporteur' }
      ],
      responsables: [
        { nom: 'M. AMIN', poste: 'Responsable Affaires Domaniales et Patrimoine', photo: '' },
        { nom: 'M. SIBABI Nouhoum', poste: 'Responsable Environnement et Travaux Techniques', photo: 'assets/SIBABI_Nouhoum.jpg' }
      ]
    },
    {
      nom: 'Commission Sociales, Culturelles, Jeunesse, Femmes, Handicapés, Âgées, Éducation & État Civil',
      president: 'M. AFO ALEDJOU',
      couleur: 'purple',
      rapporteurs: [
        { nom: 'M. OUKPEDJO', poste: 'Rapporteur' }
      ],
      responsables: [
        { nom: 'Mme ODEI Affeh', poste: 'Responsable Femmes, Handicapés, Personnes Âgées et État Civil', photo: 'assets/ODEI_Affeh.jpg' },
        { nom: 'M. OUROTOU', poste: 'Responsable Affaires Culturelles, Jeunesse et Éducation', photo: '' }
      ]
    }
  ];
}

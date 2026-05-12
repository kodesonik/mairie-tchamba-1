import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-infos-pratiques',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './infos-pratiques.html',
  styleUrl: './infos-pratiques.css'
})
export class InfosPratiquesComponent {
  services = [
    {
      nom: 'État Civil',
      description: 'Actes de naissance, mariage, décès, certificats',
      horaires: 'Lun-Ven: 8h00-12h00 / 14h30-17h00',
      contact: 'Bureau État Civil - RDC',
      documents: ['Pièce d\'identité', 'Livret de famille (si applicable)']
    },
    {
      nom: 'Légalisation',
      description: 'Certification conforme, légalisation de signatures',
      horaires: 'Lun-Ven: 8h00-12h00 / 14h30-17h00',
      contact: 'Secrétariat Général',
      documents: ['Document original', 'Copie du document', 'Pièce d\'identité']
    },
    {
      nom: 'Urbanisme',
      description: 'Permis de construire, lotissement, cadastre',
      horaires: 'Lun-Ven: 8h00-12h00 / 14h30-16h00',
      contact: 'Service Technique',
      documents: ['Plan de situation', 'Plan de masse', 'Titre foncier']
    },
    {
      nom: 'Recette Municipale',
      description: 'Paiement des taxes et impôts locaux',
      horaires: 'Lun-Ven: 8h00-15h00',
      contact: 'Recette Municipale',
      documents: ['Avis d\'imposition', 'Pièce d\'identité']
    }
  ];

  tarifs = [
    { service: 'Acte de naissance (copie)', prix: '200 FCFA' },
    { service: 'Acte de naissance (extrait)', prix: '500 FCFA' },
    { service: 'Certificat de résidence', prix: '500 FCFA' },
    { service: 'Légalisation de signature', prix: '1 000 FCFA' },
    { service: 'Certification conforme', prix: '500 FCFA' },
    { service: 'Certificat de vie', prix: '500 FCFA' }
  ];
}

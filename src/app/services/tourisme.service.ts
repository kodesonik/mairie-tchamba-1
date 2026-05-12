import { Injectable } from '@angular/core';

export interface SiteTouristique {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
  gallery?: string[];
  location?: string;
  horaires?: string;
  tarifs?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TourismeService {
  private sites: SiteTouristique[] = [
    {
      id: 'marche-tchamba',
      title: 'Le Marché de Tchamba',
      description: 'Un lieu vibrant d\'échanges et de culture, où l\'on trouve produits locaux et artisanat.',
      image: 'assets/galerie/galerie-25.jpg',
      fullDescription: 'Le marché de Tchamba est l\'un des plus grands marchés de la région centrale du Togo. Chaque dimanche, il accueille des milliers de visiteurs venus de tout le pays et des pays voisins. Vous y trouverez une grande variété de produits : céréales, épices, tissus traditionnels, poteries, et bien plus encore. C\'est un lieu incontournable pour découvrir l\'authenticité et la richesse culturelle de notre commune.',
      gallery: [
        'assets/galerie/galerie-25.jpg',
        'assets/galerie/galerie-24.jpg',
      ],
      location: 'Centre-ville de Tchamba',
      horaires: 'Tous les dimanches de 6h à 18h',
      tarifs: 'Accès libre'
    },
    {
      id: 'identite-culturelle',
      title: 'Identité culturelle',
      description: 'Découvrez le riche héritage spirituel et historique de Tchamba et ses traditions ancestrales.',
      image: 'assets/galerie/galerie-15.jpg',
      fullDescription: 'Tchamba possède une identité culturelle unique, fruit d\'un brassage ethnique et religieux séculaire. La commune est reconnue pour ses traditions ancestrales, ses rites et cérémonies qui continuent de rythmer la vie des habitants. Cette richesse culturelle se manifeste à travers l\'artisanat local, la musique traditionnelle, les danses et les célébrations communautaires.',
      gallery: [
        'assets/galerie/galerie-15.jpg',
        'assets/galerie/galerie-1.jpg',
        'assets/galerie/galerie-39.jpg',
        'assets/galerie/galerie-18.jpg'

      ],
      location: 'Commune de Tchamba',
      horaires: 'Visites guidées sur demande',
      tarifs: 'Selon le programme'
    },
    {
      id: 'vie-quotidienne',
      title: 'Vie Quotidienne',
      description: 'Immergez-vous dans le quotidien des habitants de Tchamba, leur hospitalité et leurs traditions.',
      image: 'assets/galerie/galerie-31.jpg',
      fullDescription: 'Découvrir Tchamba, c\'est aussi s\'immerger dans la vie quotidienne de ses habitants. L\'hospitalité légendaire des Tchambéens vous permettra de vivre des moments authentiques : partager un repas en famille, assister aux travaux agricoles, ou simplement échanger avec les anciens sous l\'arbre à palabres. Une expérience humaine inoubliable vous attend.',
      gallery: [
        'assets/galerie/galerie-31.jpg',
        'assets/galerie/galerie-27.jpg',
        'assets/galerie/galerie-29.jpg'
      ],
      location: 'Villages de la commune',
      horaires: 'Toute l\'année',
      tarifs: 'Immersion gratuite'
    },
    {
      id: 'architecture-locale',
      title: 'Architecture Locale',
      description: 'Admirez l\'architecture traditionnelle et moderne qui caractérise notre commune.',
      image: 'assets/town/town-7.jpg',
      fullDescription: 'L\'architecture de Tchamba témoigne de son histoire riche et de son évolution. Des cases traditionnelles aux bâtiments coloniaux, en passant par les constructions modernes, chaque édifice raconte une partie de notre histoire. La mosquée centrale et les différents lieux de culte illustrent également la diversité religieuse de notre commune.',
      gallery: [
        'assets/town/town-7.jpg',
        'assets/galerie/galerie-2.jpg',
        'assets/galerie/galerie-3.jpg',
        'assets/galerie/galerie-8.jpg',

      ],
      location: 'Centre-ville et quartiers historiques',
      horaires: 'Visites libres',
      tarifs: 'Accès libre'
    },
    {
      id: 'evenements-culturels',
      title: 'Événements Culturels',
      description: 'Participez aux nombreuses festivités et célébrations qui rythment la vie de Tchamba.',
      image: 'assets/galerie/galerie-37.jpg',
      fullDescription: 'Tout au long de l\'année, Tchamba vibre au rythme de ses événements culturels. Fêtes traditionnelles, cérémonies religieuses, festivals de musique et de danse... Chaque occasion est prétexte à rassembler la communauté et à célébrer notre patrimoine. Les visiteurs sont toujours les bienvenus pour partager ces moments de joie et de convivialité.',
      gallery: [
        'assets/galerie/galerie-37.jpg',
        'assets/galerie/galerie-1.jpg',
        'assets/galerie/galerie-4.jpg',
        'assets/galerie/galerie-6.jpg',
        'assets/galerie/galerie-7.jpg',
        'assets/galerie/galerie-11.jpg',
        'assets/galerie/galerie-12jpg',
      ],
      location: 'Divers lieux de la commune',
      horaires: 'Selon le calendrier des événements',
      tarifs: 'Variable selon l\'événement'
    }
  ];

  getSites(): SiteTouristique[] {
    return this.sites;
  }

  getSiteById(id: string): SiteTouristique | undefined {
    return this.sites.find(site => site.id === id);
  }
}

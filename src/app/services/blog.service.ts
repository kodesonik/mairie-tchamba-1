import { Injectable } from '@angular/core';

export interface Article {
  id: string;
  titre: string;
  sousTitre: string;
  date: string;
  auteur: string;
  resume: string;
  contenu: string;
  imagePrincipale: string;
  images: string[];
  videos: string[];
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private articles: Article[] = [
    {
      id: 'bac1-concentration-perseverance',
      titre: '« Concentration et persévérance » : le message des autorités aux candidats du BAC 1',
      sousTitre: 'Tchamba / Éducation',
      date: '19 mai 2026',
      auteur: 'Samuel MADO',
      resume: 'Le préfet de Tchamba, El-hadj Issaka Laguebande, accompagné du maire de Tchamba 1, Hamza Titikpina, a visité le centre d\'écrit du Baccalauréat première partie (BAC 1) pour encourager les candidats et témoigner du soutien du gouvernement.',
      contenu: `Le préfet de Tchamba, El-hadj Issaka Laguebande, accompagné du maire de la commune de Tchamba 1, Monsieur Hamza Titikpina, a effectué, ce mardi 19 mai 2026, une visite au centre d'écrit de l'examen du Baccalauréat première partie (BAC 1) de Tchamba.

Cette descente avait pour objectif de constater de visu le démarrage effectif des épreuves dans l'ensemble des centres d'examen et de témoigner aux candidats le soutien du gouvernement. Elle a également permis aux officiels de s'assurer que les épreuves se déroulent dans de bonnes conditions.

Le préfet Issaka a félicité les candidats pour leur assiduité tout au long de l'année scolaire. Il les a exhortés à faire preuve de concentration, à lire attentivement les sujets sans précipitation et à donner le meilleur d'eux-mêmes. « Notre vœu le plus ardent est que vous figuriez parmi les meilleurs au plan national », a-t-il déclaré.

De son côté, le maire Hamza Titikpina a rappelé aux candidats que l'examen n'est pas un obstacle, mais plutôt une occasion de démontrer le sérieux et les efforts consentis durant l'année. « Il s'agit pour vous de restituer ce que vous avez appris, lu et exercé. Je suis convaincu que cela ne constituera pas une difficulté pour vous », a-t-il affirmé.

Le BAC 1 est un examen décisif qui ouvre les portes de la classe de terminale. Au niveau préfectoral, 775 candidats, dont 374 filles, sont en lice pour décrocher ce précieux sésame.`,
      imagePrincipale: 'assets/blog-5/blog5-1.jpg',
      images: [
        'assets/blog-5/blog5-1.jpg',
        'assets/blog-5/blog5-2.jpg',
        'assets/blog-5/blog5-3.jpg',
        'assets/blog-5/blog5-4.jpg',
        'assets/blog-5/blog5-5.jpg',
        'assets/blog-5/blog5-6.jpg',
        'assets/blog-5/blog5-7.jpg',
        'assets/blog-5/blog5-8.jpg'
      ],
      videos: [],
      tags: ['Éducation', 'BAC 1', 'Examen', 'Jeunesse']
    },
    {
      id: 'cohesion-sociale-tournee-sensibilisation',
      titre: 'Cohésion sociale : le maire en tournée de sensibilisation',
      sousTitre: 'Tchamba 1 / Cohésion sociale',
      date: '11 mai 2026',
      auteur: 'Bureau de l\'Information et de la Presse / Tchamba 1',
      resume: 'Le maire de Tchamba 1, Hamza Titikpina, a entamé une tournée de sensibilisation auprès des jeunes écoliers et non écoliers sur les thèmes de la cohésion sociale et du civisme, afin de promouvoir les valeurs de paix, de tolérance et de citoyenneté.',
      contenu: `Le maire de la commune de Tchamba 1, Monsieur Hamza Titikpina, a entamé le lundi 11 mai 2026, à Tchamba, une tournée de sensibilisation auprès des jeunes écoliers et non écoliers sur les thèmes de la cohésion sociale et du civisme.

Initiée à la demande des plus hauts cadres de la commune, cette campagne vise à promouvoir auprès de la jeunesse les valeurs de paix, de tolérance, de civisme et de citoyenneté. L'objectif est de susciter l'intérêt des jeunes pour les initiatives citoyennes et de les encourager à incarner les valeurs républicaines et traditionnelles locales.

A l'entame de cette tournée, le maire Titikpina s'est entretenu avec les élèves du Lycée Tchamba Ville et ceux du secondaire 1 du Lycée Tchamba. Il a également échangé avec les communautés des quartiers Djariwa, N'Kpendja, Boupépoh, Ditampouri et Dabawa.

Dans son message, le premier magistrat de la commune a exhorté les apprenants à adopter des comportements responsables et civiques : « Les fonctions de préfet, de maire, de ministre, etc., seront les vôtres demain. Mais vous ne les mériterez que si vous êtes porteurs de valeurs de civisme, de patriotisme et de citoyenneté, et si vous cultivez l'excellence », a-t-il déclaré.

S'adressant aux jeunes des quartiers, il a rappelé qu'ils représentent non seulement la relève de demain, mais aussi des acteurs incontournables du développement à la base, tel que pensé par le Président du Conseil, Faure Essozimna Gnassingbé, à travers la politique de décentralisation. Il les a invités à privilégier, en toute circonstance, le dialogue et la tolérance plutôt que la violence.

À chaque étape, le maire a insisté sur la nécessité de contribuer à la prévention de l'extrémisme violent. « Le gouvernement ne ménage aucun effort pour assurer la paix et la sécurité de tous. Nous avons l'obligation d'aider à prévenir l'insécurité en collaborant avec les autorités et les Forces de l'Ordre », a-t-il ajouté.

La présidente du Comité Local de Paix (CLP Missomsom yah) de Tchamba, Mme Christine Alika, présente à cette première journée, a salué l'initiative du maire. Elle en a profité pour sensibiliser l'assistance à la culture de la paix : « Chacun de nous aspire à la prospérité, à l'autonomie financière et à bien d'autres choses. Mais rien de tout cela n'est possible sans la paix », a-t-elle souligné.

Le lancement de cette tournée s'est déroulé en présence de l'Inspecteur du second degré, M. Athanase Sekpane, des responsables d'établissements scolaires, des enseignants, des parents d'élèves ainsi que des chefs traditionnels et religieux.

La tournée se poursuit jusqu'au 23 mai prochain.`,
      imagePrincipale: 'assets/blog-6/blog6-1.jpg',
      images: [
        'assets/blog-6/blog6-1.jpg',
        'assets/blog-6/blog6-2.jpg',
        'assets/blog-6/blog6-3.jpg',
        'assets/blog-6/blog6-4.jpg',
        'assets/blog-6/blog6-5.jpg',
        'assets/blog-6/blog6-6.jpg',
        'assets/blog-6/blog6-7.jpg'
      ],
      videos: [],
      tags: ['Cohésion sociale', 'Civisme', 'Jeunesse', 'Paix']
    },
    {
      id: 'cohesion-sociale-etape-dagma',
      titre: 'Cohésion sociale : le maire à l\'étape du village de Dagma',
      sousTitre: 'Tchamba 1 / Cohésion sociale',
      date: 'mai 2026',
      auteur: 'Bureau de l\'Information et de la Presse / Tchamba 1',
      resume: 'Poursuivant sa tournée de sensibilisation sur la cohésion sociale et le civisme, le maire de Tchamba 1, Hamza Titikpina, a fait étape au village de Dagma, à la rencontre des écoliers et des populations, pour promouvoir les valeurs de paix, de tolérance et de citoyenneté.',
      contenu: `Dans le cadre de sa tournée de sensibilisation sur les thèmes de la cohésion sociale et du civisme, le maire de la commune de Tchamba 1, Monsieur Hamza Titikpina, a fait étape au village de Dagma, à la rencontre des jeunes écoliers et des populations.

Initiée à la demande des plus hauts cadres de la commune, cette campagne vise à promouvoir auprès de la jeunesse les valeurs de paix, de tolérance, de civisme et de citoyenneté. L'objectif est de susciter l'intérêt des jeunes pour les initiatives citoyennes et de les encourager à incarner les valeurs républicaines et traditionnelles locales.

À Dagma, le premier magistrat de la commune s'est entretenu avec les écoliers ainsi qu'avec les communautés du village. Dans son message, il a exhorté les apprenants à adopter des comportements responsables et civiques : « Les fonctions de préfet, de maire, de ministre, etc., seront les vôtres demain. Mais vous ne les mériterez que si vous êtes porteurs de valeurs de civisme, de patriotisme et de citoyenneté, et si vous cultivez l'excellence », a-t-il déclaré.

S'adressant aux jeunes, il a rappelé qu'ils représentent non seulement la relève de demain, mais aussi des acteurs incontournables du développement à la base, tel que pensé par le Président du Conseil, Faure Essozimna Gnassingbé, à travers la politique de décentralisation. Il les a invités à privilégier, en toute circonstance, le dialogue et la tolérance plutôt que la violence.

Comme à chaque étape de la tournée, le maire a insisté sur la nécessité de contribuer à la prévention de l'extrémisme violent. « Le gouvernement ne ménage aucun effort pour assurer la paix et la sécurité de tous. Nous avons l'obligation d'aider à prévenir l'insécurité en collaborant avec les autorités et les Forces de l'Ordre », a-t-il ajouté.

L'étape de Dagma s'est déroulée en présence des responsables d'établissements scolaires, des enseignants, des parents d'élèves ainsi que des chefs traditionnels et religieux, dans un esprit d'échange et de mobilisation autour des valeurs de paix et de vivre-ensemble.`,
      imagePrincipale: 'assets/blog-7/blog7-1.jpg',
      images: [
        'assets/blog-7/blog7-1.jpg',
        'assets/blog-7/blog7-2.jpg',
        'assets/blog-7/blog7-4.jpg',
        'assets/blog-7/blog7-5.jpg',
        'assets/blog-7/blog7-6.jpg',
        'assets/blog-7/blog7-7.jpg',
        'assets/blog-7/blog7-8.jpg',
        'assets/blog-7/blog7-9.jpg',
        'assets/blog-7/blog7-10.jpg'
      ],
      videos: [
        'assets/blog-7/blog7-1.mp4',
        'assets/blog-7/blog7-2.mp4',
        'assets/blog-7/blog7-3.mp4',
        'assets/blog-7/blog7-4.mp4',
        'assets/blog-7/blog7-5.mp4'
      ],
      tags: ['Cohésion sociale', 'Civisme', 'Jeunesse', 'Paix', 'Dagma']
    },
    {
      id: 'developpement-urbain-plu',
      titre: 'Développement urbain : Tchamba 1 trace sa vision à long terme grâce au PLU',
      sousTitre: 'Tchamba 1 / Aménagement du territoire',
      date: '7 mai 2026',
      auteur: 'Bureau de l\'Information et de la Presse / Tchamba 1',
      resume: 'La commune de Tchamba 1 a franchi une étape importante dans la planification de son développement urbain avec la tenue d\'un atelier technique consacré à la validation de son Plan Local d\'Urbanisme (PLU), prévu pour une durée de quinze ans.',
      contenu: `La commune de Tchamba 1 vient de franchir une étape importante dans la planification de son développement urbain. Un atelier technique consacré à la validation du Plan Local d'Urbanisme (PLU) s'est tenu ce jeudi 7 mai 2026 à Tchamba.

Cette rencontre a mobilisé les différentes parties prenantes impliquées dans l'élaboration du document, notamment une délégation du ministère de l'Aménagement territorial et de l'Urbanisme, des conseillers municipaux, des chefs traditionnels ainsi que plusieurs acteurs du développement local.

Les travaux ont permis de présenter les résultats du diagnostic territorial ainsi que les grandes orientations stratégiques du PLU de Tchamba 1. Ils ont également offert aux participants l'occasion d'examiner le projet de Plan Local d'Urbanisme élaboré par le groupement CID BETA, cabinet chargé de la réalisation du document, et de formuler des observations et recommandations en vue de sa validation.

Véritable outil de planification et de gestion territoriale, le Plan Local d'Urbanisme organise l'occupation de l'espace communal et fixe les règles en matière d'aménagement, d'utilisation des sols et de développement urbain. Sa validation permettra à la commune de mieux maîtriser son expansion urbaine, de prévenir les occupations anarchiques, d'améliorer les infrastructures et de renforcer son attractivité pour les investissements publics et privés.

Prenant la parole à cette occasion, le directeur chargé du développement de l'urbanisme au ministère de l'Aménagement territorial et de l'Urbanisme, M. Issa Tchanilé, a rappelé que l'élaboration de ce document stratégique s'inscrit dans le cadre d'un projet gouvernemental visant à doter treize communes du pays, dont Tchamba 1, d'un Plan Local d'Urbanisme. Il a exprimé sa gratitude à l'ensemble des acteurs impliqués, particulièrement au maire de la commune, pour leur engagement dans la réussite du projet.

Pour sa part, le maire de Tchamba 1, M. Hamza Titikpina, a adressé ses remerciements au Président du Conseil, Faure Essozimna Gnassingbé, pour cette initiative structurante. Selon lui, ce document constituera un repère essentiel pour le conseil municipal dans la conduite de sa politique d'aménagement du territoire. Il a également salué les contributions de toutes les parties prenantes ayant participé à l'élaboration du PLU.

Le Plan Local d'Urbanisme de la commune de Tchamba 1 est prévu pour une durée de quinze ans et demeurera en vigueur jusqu'en 2041.`,
      imagePrincipale: 'assets/blog-8/blog8-1.jpg',
      images: [
        'assets/blog-8/blog8-1.jpg',
        'assets/blog-8/blog8-2.jpg',
        'assets/blog-8/blog8-3.jpg',
        'assets/blog-8/blog8-4.jpg'
      ],
      videos: [],
      tags: ['Aménagement du territoire', 'Urbanisme', 'PLU', 'Développement']
    },
    {
      id: 'togo-propre-salubrite',
      titre: 'Forte mobilisation citoyenne autour de l\'opération nationale de salubrité « Togo Propre »',
      sousTitre: 'Tchamba 1 / Salubrité',
      date: '7 février 2026',
      auteur: 'Bureau de l\'Information et de la Presse / Tchamba 1',
      resume: 'La commune de Tchamba 1 a vibré au rythme de la Journée nationale de salubrité publique « Togo Propre ». En réponse à l\'appel du Maire Hamza TITIKPINA, les populations sont sorties massivement pour poser un acte citoyen fort en faveur d\'un cadre de vie propre et sain.',
      contenu: `La commune de Tchamba 1 a vibré, le samedi 7 février 2026, au rythme de la Journée nationale de salubrité publique, à travers l'opération gouvernementale « Togo Propre ».

En réponse à l'appel du Maire, Monsieur Hamza TITIKPINA, les populations sont sorties massivement pour poser un acte citoyen fort en faveur d'un cadre de vie propre et sain.

Déjà à 06 heures, les autorités administratives, politiques, traditionnelles, militaires et religieuses, ainsi que des conseillers municipaux, agents des secteurs public, parapublic et privé, organisations de la société civile, Comités de développement de quartiers (CDQ), agents municipaux, bref toutes les forces vives de la commune de Tchamba 1 se sont retrouvés au Centre des spectacles et des loisirs de Tchamba, dans une ambiance marquée par l'effervescence, le civisme et l'engagement collectif.

Munis de balais, de coupe-coupe, râteaux et autres outils de nettoyage, jeunes, adultes et personnes âgées ont investi rues, ruelles, places publiques et quartiers de la ville pour mener des travaux d'assainissement. Cette action collective a permis d'améliorer significativement la propreté des espaces publics, traduisant la ferme volonté des populations de lutter contre l'insalubrité et de préserver leur environnement.

Saluant cette forte mobilisation, le Maire de la commune de Tchamba 1 s'est réjoui de l'engagement spontané des citoyens. Il a souligné que cette participation active témoigne de l'attachement des populations aux valeurs de civisme, de solidarité et de citoyenneté, tout en reflétant leur compréhension de la politique d'inclusion sociale prônée par le Président du Conseil, SEM Faure Essozimna Gnassingbé, qui encourage l'implication de chaque citoyen dans le développement local à travers la décentralisation.

Le Maire a par ailleurs exhorté les populations à poursuivre cet effort au sein de leurs domiciles respectifs, afin de faire de Tchamba 1 une commune modèle en matière de salubrité. Il a dit compter sur cet engagement citoyen constant pour la réussite des prochaines éditions.

Le prochain rendez-vous est d'ores et déjà pris pour le samedi 7 mars 2026, avec la même ferveur et la même détermination à bâtir une commune propre, saine et exemplaire.`,
      imagePrincipale: 'assets/blog-4/blog4-1.jpg',
      images: [
        'assets/blog-4/blog4-1.jpg',
        'assets/blog-4/blog4-2.jpg',
        'assets/blog-4/blog4-3.jpg',
        'assets/blog-4/blog4-4.jpg',
        'assets/blog-4/blog4-5.jpg',
        'assets/blog-4/blog4-6.jpg'
      ],
      videos: [],
      tags: ['Salubrité', 'Togo Propre', 'Civisme', 'Décentralisation']
    },
    {
      id: 'visite-ouvrages-conseil-municipal',
      titre: 'Visite des ouvrages de la Commune par le Conseil Municipal',
      sousTitre: 'Tchamba 1 / Développement',
      date: '1 février 2026',
      auteur: 'Bureau de l\'Information et de la Presse / Tchamba 1',
      resume: 'Le Conseil Municipal de Tchamba 1 a effectué une visite des ouvrages de la commune, conduite par le Maire Hamza TITIKPINA, pour évaluer l\'état des infrastructures et les projets en cours.',
      contenu: `Le Conseil Municipal de la commune de Tchamba 1 a effectué une visite d'inspection des ouvrages et infrastructures de la commune. Cette tournée, conduite par le Maire Hamza TITIKPINA, a permis aux conseillers municipaux de constater l'état d'avancement des différents projets de développement en cours sur le territoire communal.

Cette visite s'inscrit dans la volonté de transparence et de bonne gouvernance prônée par la nouvelle équipe municipale. Les élus ont pu apprécier sur le terrain les réalisations accomplies et identifier les besoins prioritaires pour les prochaines interventions.

Le Maire TITIKPINA a souligné l'importance de ces visites de terrain pour une gestion efficace et rapprochée des affaires communales. Il a rappelé que le développement de Tchamba 1 passe par un suivi rigoureux des projets et une implication active de l'ensemble des conseillers municipaux.

Les membres du Conseil Municipal ont exprimé leur satisfaction quant à cette démarche participative et ont réaffirmé leur engagement à œuvrer ensemble pour le bien-être des populations de Tchamba 1.`,
      imagePrincipale: 'assets/blog-2/blog2-1.jpeg',
      images: [
        'assets/blog-2/blog2-1.jpeg',
        'assets/blog-2/blog2-2.jpeg',
        'assets/blog-2/blog2-3.jpeg',
        'assets/blog-2/blog2-4.jpeg',
        'assets/blog-2/blog2-5.jpeg',
        'assets/blog-2/blog2-6.jpeg',
        'assets/blog-2/blog2-7.jpeg',
        'assets/blog-2/blog2-8.jpeg',
        'assets/blog-2/blog2-9.jpeg',
        'assets/blog-2/blog2-10.jpeg',
        'assets/blog-2/blog2-11.jpeg',
        'assets/blog-2/blog2-12.jpeg',
        'assets/blog-2/blog2-13.jpeg',
        'assets/blog-2/blog2-14.jpeg',
        'assets/blog-2/blog2-15.jpeg',
        'assets/blog-2/blog2-16.jpeg',
        'assets/blog-2/blog2-17.jpeg',
        'assets/blog-2/blog2-18.jpeg',
        'assets/blog-2/blog2-19.jpeg',
        'assets/blog-2/blog2-20.jpeg',
        'assets/blog-2/blog2-21.jpeg',
        'assets/blog-2/blog2-22.jpeg',
        'assets/blog-2/blog2-23.jpeg'
      ],
      videos: [
        'assets/blog-2/blog2-1.mp4',
        'assets/blog-2/blog2-2.mp4'
      ],
      tags: ['Conseil Municipal', 'Infrastructures', 'Développement', 'Gouvernance']
    },
    {
      id: 'visite-marche-tchamba',
      titre: 'Visite du marché de Tchamba',
      sousTitre: 'Tchamba 1 / Économie locale',
      date: '25 janvier 2026',
      auteur: 'Bureau de l\'Information et de la Presse / Tchamba 1',
      resume: 'Visite du grand marché dominical de Tchamba, un carrefour commercial majeur de la région Centrale du Togo, où se rencontrent commerçants locaux et visiteurs de toute la sous-région.',
      contenu: `Le marché de Tchamba, l'un des plus grands marchés de la région Centrale du Togo, constitue un véritable poumon économique pour la commune de Tchamba 1 et ses environs.

Ce marché dominical attire chaque semaine des milliers de commerçants et visiteurs venus de tout le Togo et des pays voisins, notamment le Bénin, le Ghana et le Nigeria. On y trouve une grande variété de produits : céréales, tubercules, bétail, textiles, produits artisanaux et bien d'autres.

La visite a permis de constater la vitalité économique de ce haut lieu de commerce et d'échanges. Le marché de Tchamba est non seulement un espace commercial, mais aussi un lieu de brassage culturel où se côtoient différentes communautés dans un esprit de convivialité et de partage.

Les autorités municipales ont réaffirmé leur engagement à moderniser les infrastructures du marché pour améliorer les conditions de travail des commerçants et renforcer l'attractivité de ce site emblématique de la commune.`,
      imagePrincipale: 'assets/blog-3/blog3-1.jpeg',
      images: [
        'assets/blog-3/blog3-1.jpeg',
        'assets/blog-3/blog3-2.jpeg',
        'assets/blog-3/blog3-3.jpeg',
        'assets/blog-3/blog3-4.jpeg',
        'assets/blog-3/blog3-5.jpeg',
        'assets/blog-3/blog3-6.jpeg',
        'assets/blog-3/blog3-7.jpeg',
        'assets/blog-3/blog3-8.jpeg',
        'assets/blog-3/blog3-9.jpeg',
        'assets/blog-3/blog3-10.jpeg',
        'assets/blog-3/blog3-11.jpeg',
        'assets/blog-3/blog3-12.jpeg',
        'assets/blog-3/blog3-13.jpeg',
        'assets/blog-3/blog3-14.jpeg',
        'assets/blog-3/blog3-15.jpeg',
        'assets/blog-3/blog3-16.jpeg',
        'assets/blog-3/blog3-17.jpeg',
        'assets/blog-3/blog3-18.jpeg',
        'assets/blog-3/blog3-19.jpeg',
        'assets/blog-3/blog3-20.jpeg'
      ],
      videos: [
        'assets/blog-3/blog3-1.mp4',
        'assets/blog-3/blog3-2.mp4',
        'assets/blog-3/blog3-3.mp4',
        'assets/blog-3/blog3-4.mp4'
      ],
      tags: ['Marché', 'Économie locale', 'Commerce', 'Tchamba']
    },
    {
      id: 'felicitations-maire-titikpina',
      titre: 'Les communautés allogènes félicitent le Maire TITIKPINA pour son élection',
      sousTitre: 'Tchamba 1 / Décentralisation',
      date: '17 janvier 2026',
      auteur: 'Bureau de l\'Information et de la Presse / Tchamba 1',
      resume: 'Les communautés allogènes de la commune de Tchamba 1 ont félicité le Maire Hamza TITIKPINA pour son élection à la tête de la municipalité, témoignant leur soutien et leur disponibilité à accompagner les actions municipales.',
      contenu: `Les communautés allogènes de la commune de Tchamba 1 ont félicité, le samedi 17 janvier 2026 à Tchamba, le Maire Hamza TITIKPINA pour son élection à la tête de la municipalité.

Cette initiative vise à témoigner du soutien de ces communautés au nouveau premier magistrat de la commune et à réaffirmer leur disponibilité à accompagner toutes les actions municipales orientées vers l'inclusion et le développement de Tchamba 1.

La rencontre a été marquée par diverses prestations de danses traditionnelles, notamment le Kamou, le Soh et le Tsimou.

« L'hospitalité de la commune de Tchamba 1 nous a permis de nous y intégrer facilement. C'est pourquoi nous avons souhaité, à l'aube de cette nouvelle mandature, réitérer notre engagement à contribuer, aux côtés des nouvelles autorités, au développement de cette commune », a déclaré El-hadj Agba OURO-TOUH, porte-parole des communautés allogènes de Tchamba 1.

Le Conseiller régional de la Centrale, Monsieur Wahabou APOUDJAK, a, au nom des cadres de la commune, salué cette initiative. « Vous avez démontré qu'au chantier du développement de nos collectivités, nous devons dépasser toutes nos différences et demeurer unis. Sachez que vous êtes chez vous ici. Vous êtes d'abord de Tchamba 1 avant d'être de Kozah, de Niamtougou, des Savanes, etc. », a-t-il ajouté.

Pour sa part, le Maire de Tchamba 1 a exprimé sa gratitude aux initiateurs de la rencontre. Il a souligné que cette démarche vient galvaniser le conseil municipal dans sa politique de promotion de la cohésion sociale, de la paix et du vivre-ensemble, valeurs prônées par le Président du Conseil, Faure Essozimna GNASSINGBE. Il a par ailleurs indiqué que sa mandature sera placée sous le signe de la mobilisation et de la fédération de toutes les forces vives de la commune au service du développement.

Le Préfet de Tchamba, El-hadj Issaka LAGUEBANDE, ainsi que plusieurs autres autorités administratives, politiques, traditionnelles, militaires et religieuses ont également pris part à la rencontre.`,
      imagePrincipale: 'assets/blog/image-1.jpg',
      images: [
        'assets/blog/image-1.jpg',
        'assets/blog/image-2.jpg',
        'assets/blog/image-3.jpg',
        'assets/blog/image-4.jpg',
        'assets/blog/image-5.jpg',
        'assets/blog/image-6.jpg',
        'assets/blog/image-7.jpg',
        'assets/blog/image-8.jpg',
        'assets/blog/image-9.jpg',
        'assets/blog/image-10.jpg',
        'assets/blog/image-11.jpg'
      ],
      videos: [
        'assets/blog/video-1.mp4',
        'assets/blog/video-2.mp4',
        'assets/blog/video-3.mp4'
      ],
      tags: ['Décentralisation', 'Communautés', 'Cohésion sociale', 'Développement']
    }
  ];

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: string): Article | undefined {
    return this.articles.find(article => article.id === id);
  }
}

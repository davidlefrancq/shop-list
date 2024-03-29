export const isEAN = (code: string) => {
  const eanRegex = /^(\d{8}|\d{12,13})$/;
  return eanRegex.test(code);
};

type RangeCode = {
  start: number;
  end: number;
  country: string;
};

const ranges: RangeCode[] = [
  {start: 0, end: 60, country: 'États-Unis'},
  {start: 300, end: 379, country: 'France'},
  {start: 380, end: 380, country: 'Bulgarie'},
  {start: 383, end: 383, country: 'Slovénie'},
  {start: 385, end: 385, country: 'Croatie'},
  {start: 387, end: 387, country: 'Bosnie-Herzégovine'},
  {start: 400, end: 440, country: 'Allemagne'},
  {start: 450, end: 459, country: 'Japon'},
  {start: 460, end: 469, country: 'Russie'},
  {start: 470, end: 470, country: 'Kirghizistan'},
  {start: 471, end: 471, country: 'Taïwan'},
  {start: 474, end: 474, country: 'Estonie'},
  {start: 475, end: 475, country: 'Lettonie'},
  {start: 476, end: 476, country: 'Azerbaïdjan'},
  {start: 477, end: 477, country: 'Lituanie'},
  {start: 478, end: 478, country: 'Ouzbékistan'},
  {start: 479, end: 479, country: 'Sri Lanka'},
  {start: 480, end: 480, country: 'Philippines'},
  {start: 481, end: 481, country: 'Biélorussie'},
  {start: 482, end: 482, country: 'Ukraine'},
  {start: 484, end: 484, country: 'Moldavie'},
  {start: 485, end: 485, country: 'Arménie'},
  {start: 486, end: 486, country: 'Géorgie'},
  {start: 487, end: 487, country: 'Kazakhstan'},
  {start: 489, end: 489, country: 'Hong Kong'},
  {start: 490, end: 499, country: 'Japon'},
  {start: 500, end: 509, country: 'Royaume-Uni'},
  {start: 520, end: 520, country: 'Grèce'},
  {start: 528, end: 528, country: 'Liban'},
  {start: 529, end: 529, country: 'Chypre'},
  {start: 530, end: 530, country: 'Albanie'},
  {start: 531, end: 531, country: 'Macédoine'},
  {start: 535, end: 535, country: 'Malte'},
  {start: 539, end: 539, country: 'Irlande'},
  {start: 540, end: 549, country: 'Belgique & Luxembourg'},
  {start: 560, end: 560, country: 'Portugal'},
  {start: 569, end: 569, country: 'Islande'},
  {start: 570, end: 579, country: 'Danemark'},
  {start: 590, end: 590, country: 'Pologne'},
  {start: 594, end: 594, country: 'Roumanie'},
  {start: 599, end: 599, country: 'Hongrie'},
  {start: 600, end: 601, country: 'Afrique du Sud'},
  {start: 603, end: 603, country: 'Ghana'},
  {start: 608, end: 608, country: 'Bahreïn'},
  {start: 609, end: 609, country: 'Île Maurice'},
  {start: 611, end: 611, country: 'Maroc'},
  {start: 613, end: 613, country: 'Algérie'},
  {start: 616, end: 616, country: 'Kenya'},
  {start: 618, end: 618, country: 'Côte d’Ivoire'},
  {start: 619, end: 619, country: 'Tunisie'},
  {start: 621, end: 621, country: 'Syrie'},
  {start: 622, end: 622, country: 'Égypte'},
  {start: 624, end: 624, country: 'Libye'},
  {start: 625, end: 625, country: 'Jordanie'},
  {start: 626, end: 626, country: 'Iran'},
  {start: 627, end: 627, country: 'Koweït'},
  {start: 628, end: 628, country: 'Arabie Saoudite'},
  {start: 629, end: 629, country: 'Émirats Arabes Unis'},
  {start: 640, end: 649, country: 'Finlande'},
  {start: 690, end: 695, country: 'Chine'},
  {start: 700, end: 709, country: 'Norvège'},
  {start: 729, end: 729, country: 'Israël'},
  {start: 730, end: 739, country: 'Suède'},
  {start: 740, end: 740, country: 'Guatemala'},
  {start: 741, end: 741, country: 'Salvador'},
  {start: 742, end: 742, country: 'Honduras'},
  {start: 743, end: 743, country: 'Nicaragua'},
  {start: 744, end: 744, country: 'Costa Rica'},
  {start: 745, end: 745, country: 'Panama'},
  {start: 746, end: 746, country: 'République Dominicaine'},
  {start: 750, end: 750, country: 'Mexique'},
  {start: 754, end: 755, country: 'Canada'},
  {start: 759, end: 759, country: 'Venezuela'},
  {start: 760, end: 769, country: 'Suisse'},
  {start: 770, end: 770, country: 'Colombie'},
  {start: 773, end: 773, country: 'Uruguay'},
  {start: 775, end: 775, country: 'Pérou'},
  {start: 777, end: 777, country: 'Bolivie'},
  {start: 779, end: 779, country: 'Argentine'},
  {start: 780, end: 780, country: 'Chili'},
  {start: 784, end: 784, country: 'Paraguay'},
  {start: 786, end: 786, country: 'Équateur'},
  {start: 789, end: 790, country: 'Brésil'},
  {start: 800, end: 839, country: 'Italie'},
  {start: 840, end: 849, country: 'Espagne'},
  {start: 850, end: 850, country: 'Cuba'},
  {start: 858, end: 858, country: 'Slovaquie'},
  {start: 859, end: 859, country: 'République tchèque'},
  {start: 860, end: 860, country: 'Serbie'},
  {start: 865, end: 865, country: 'Mongolie'},
  {start: 867, end: 867, country: 'Corée du Nord'},
  {start: 869, end: 869, country: 'Turquie'},
  {start: 870, end: 879, country: 'Pays-Bas'},
  {start: 880, end: 880, country: 'Corée du Sud'},
  {start: 884, end: 884, country: 'Cambodge'},
  {start: 885, end: 885, country: 'Thaïlande'},
  {start: 888, end: 888, country: 'Singapour'},
  {start: 890, end: 890, country: 'Inde'},
  {start: 893, end: 893, country: 'Vietnam'},
  {start: 899, end: 899, country: 'Indonésie'},
  {start: 900, end: 919, country: 'Autriche'},
  {start: 930, end: 939, country: 'Australie'},
  {start: 940, end: 949, country: 'Nouvelle-Zélande'},
  {start: 955, end: 955, country: 'Malaisie'},
  {start: 958, end: 958, country: 'Macao'},
];

export const findCountryByCode = (code: string): string | null => {
  const prefix = parseInt(code.substring(0, 3));
  for (const range of ranges) {
    if (prefix >= range.start && prefix <= range.end) {
      return range.country;
    }
  }
  return null;
};

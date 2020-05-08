export {};
// Funcion para mostrar Fotografia

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// Herencia
interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  // Copia de los atributos de Entity
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: 'Cosas que contarte',
  description: 'The best album in the world',
};

const picture: Picture = {
  id: 1,
  title: 'Morodo',
  orientation: PhotoOrientation.Panorama,
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);

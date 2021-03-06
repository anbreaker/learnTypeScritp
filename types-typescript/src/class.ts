export {};
// Funcion para mostrar Fotografia

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// Clases
class Picture {
  // Propiedades
  id: number;
  title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento de la clase
  toString() {
    return `[id: ${this.id}, 
            title: ${this.title}, 
            orientation: ${this.orientation}]`;
  }
}

class Album {
  id: number;
  title: string;
  pictures: Picture[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(2, 'Cosas que contarte');
const picture: Picture = new Picture(2, 'Morodo Madrid', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los parametros publicos
picture.id = 1;
picture.title = 'Gran Vía'; // accesos publicos
album.title = 'Ozm Stayl';
console.log('album', album);

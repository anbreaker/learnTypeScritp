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
  orientation: PhotoOrientatio;

  constructor(id: number, title: string, orientation: PhotoOrientatio) {
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
const picture: Picture = new Picture(1, 'Morodo Madrid', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

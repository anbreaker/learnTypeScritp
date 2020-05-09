export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// Clases
class Picture {
  // Propiedades
  private id: number;
  private title: string;
  private orientation: PhotoOrientation;

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
  private id: number;
  private title: string;
  private pictures: Picture[];

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

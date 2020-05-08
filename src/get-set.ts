export {};

// TypeScritp 3.8
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
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  // getters & setters
  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }
  set orientation(orientation: PhotoOrientation) {
    this.orientation = orientation;
  }

  // Comportamiento de la clase
  toString() {
    return `[id: ${this._id}, 
            title: ${this._title}, 
            orientation: ${this._orientation}]`;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this.pictures = [];
  }

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }
  get title() {
    return this._title;
  }
  set title(t: string) {
    this._title = t;
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(2, 'Cosas que contarte');
const picture: Picture = new Picture(1, 'Morodo Madrid', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los parametros publicos
picture.id = 100;
picture.title = 'Gran Vía'; // accesos publicos
album.title = 'Ozm Stayl';
console.log('album', album);

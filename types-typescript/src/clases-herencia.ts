export {};

// TypeScritp 3.8
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

// Superclass
abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  // getters & setters
  get id() {
    return this._id;
  }
  // set id(id: number) {
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }
  set title(title: string) {
    this._title = title;
  }
}

// Clases
class Picture extends Item {
  static photoOrientation = PhotoOrientation;
  // Propiedades

  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this._orientation = orientation;
  }

  // getters & setters

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

class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(2, 'Cosas que contarte');
const picture: Picture = new Picture(2, 'Morodo Madrid', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album', album);

// Accediendo a los parametros publicos
// picture.id = 1;
picture.title = 'Gran Vía'; // accesos publicos
album.title = 'Ozm Stayl';
console.log('album', album);

// const item = new Item(3, 'Test Title');
// console.log('item', item);

// Prueba parametro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);

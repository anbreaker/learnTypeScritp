// TypeScritp 3.8
export {};

export enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

export class User {
  private album: Album[];

  constructor(
    private id: number,
    private username: string,
    private firtsName: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  addAlbum(album: Album) {
    this.album.push(album);
  }
}

// Superclass
export class Item {
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

export class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

export class Picture extends Item {
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

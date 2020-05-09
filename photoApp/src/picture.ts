import {Item} from './item';
import {PhotoOrientation} from './photo-orientation';

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

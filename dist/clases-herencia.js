"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Superclass
class Item {
    constructor(id, title) {
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
    set title(title) {
        this._title = title;
    }
}
// Clases
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    // getters & setters
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this.orientation = orientation;
    }
    // Comportamiento de la clase
    toString() {
        return `[id: ${this._id}, 
            title: ${this._title}, 
            orientation: ${this._orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(2, 'Cosas que contarte');
const picture = new Picture(2, 'Morodo Madrid', PhotoOrientation.Square);
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

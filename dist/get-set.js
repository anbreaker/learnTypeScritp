"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Clases
class Picture {
    constructor(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    // getters & setters
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
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
class Album {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this.pictures = [];
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(t) {
        this._title = t;
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(2, 'Cosas que contarte');
const picture = new Picture(1, 'Morodo Madrid', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
// Accediendo a los parametros publicos
picture.id = 100;
picture.title = 'Gran Vía'; // accesos publicos
album.title = 'Ozm Stayl';
console.log('album', album);

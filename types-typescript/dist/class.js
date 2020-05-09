"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion para mostrar Fotografia
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
    constructor(id, title) {
        this.id = id;
        this.title = title;
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
picture.id = 1;
picture.title = 'Gran Vía'; // accesos publicos
album.title = 'Ozm Stayl';
console.log('album', album);

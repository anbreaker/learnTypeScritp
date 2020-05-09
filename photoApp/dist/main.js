"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'Ruben', 'Morodo', true);
var album = new photo_app_1.Album(1, 'Cosas que Contarte');
var picture = new photo_app_1.Picture(1, 'Gran Vía', photo_app_1.PhotoOrientation.Landscape);
// Creqamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);

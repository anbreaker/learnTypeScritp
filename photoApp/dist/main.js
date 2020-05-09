"use strict";
// import {User, Album, Picture, PhotoOrientation} from './photo-app';
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, 'Ruben', 'Morodo', true);
const album = new album_1.Album(1, 'Cosas que Contarte');
const picture = new picture_1.Picture(1, 'Gran Vía', photo_orientation_1.PhotoOrientation.Landscape);
// Creqamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
// Borramos Album
user.removeAlbum(album);
console.log('Sin album en el array', user);

import {User, Album, Picture, PhotoOrientation} from './photo-app';

const user = new User(1, 'Ruben', 'Morodo', true);
const album = new Album(1, 'Cosas que Contarte');
const picture = new Picture(1, 'Gran Vía', PhotoOrientation.Landscape);

// Creqamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

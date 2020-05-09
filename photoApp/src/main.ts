// import {User, Album, Picture, PhotoOrientation} from './photo-app';

import {User} from './user';
import {Album} from './album';
import {Picture} from './picture';
import {PhotoOrientation} from './photo-orientation';

const user = new User(1, 'Ruben', 'Morodo', true);
const album = new Album(1, 'Cosas que Contarte');
const picture = new Picture(1, 'Gran Vía', PhotoOrientation.Landscape);

// Creqamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

// Borramos Album
user.removeAlbum(album);
console.log('Sin album en el array', user);

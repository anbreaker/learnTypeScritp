export {};
// 10, '10'
/*
let idUser: number | string;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUserNamebyId(id: number | string) {
  // Logica para buscar user
  return 'anbreaker';
}

getUserNamebyId(20);
getUserNamebyId('20');
*/

// Alias de tipo en TypeSript
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUserNamebyId(id: IdUser): Username {
  // Logica para buscar user
  return 'anbreaker';
}

getUserNamebyId(20);
getUserNamebyId('20');

// Tipos literales
// 100x100, 500x500, 1000x1000
type SquareSizes = '100x100' | '500x500' | '1000x1000';

// let smallPicture: SquareSizes = '200x200'; --> Error por no existir este tipo de dato
let smallPicture: SquareSizes = '100x100';
let mediumPicture: SquareSizes = '500x500';

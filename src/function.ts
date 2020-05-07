export {};
// Crear foto
type SquareSize = '100x100' | '500x500' | '1000x1000';
function createPicture(title: string, date: string, size: SquareSize) {
  // creacion de la fotografia
  console.log('Create Picture using', title, date, size);
}

createPicture('Cumple', '19-12-2019', '500x500');
// createPicture('Portugal', '19-02-2020'); --> error falta parametro

// Parametros opcionales (parametro seguido de ?)
function createPicture(title?: string, date: string, size?: SquareSize) {
  // creacion de la fotografia
  console.log('Create Picture using', title, date, size);
}

createPicture('Portugal', '19-02-2020');

// Flat Array function
let createPic = (title: string, date: string, size?: SquareSize): object => {
  return {title, date, size};
};

const picture = createPic('Curro', '20-03-10', '100x100');
console.log('picture', picture);

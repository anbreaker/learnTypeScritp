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

//Tipo de retorno en TypeScript

function handleError(code: number, message: string): never | string {
  // Procesamineto
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has ocurred';
  }
}

let result = handleError(200, 'OK'); // Devuelve un string
console.log('result', result);

try {
  result = handleError(404, 'error'); // Devuelve un error que debemos capturar.
  console.log('result', result);
} catch (error) {
  console.log('Se produjo un error y lo capturamos');
}
